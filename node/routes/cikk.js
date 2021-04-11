// Wikipedia szerű

const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require(path.resolve('database'));

const router = express.Router();

router.get('/getCikk', (req, res) => {
  // Lekérdezzük a cikk itemeket az SQL-ből
  const ans = [];
  db.query('SELECT user.realname AS user_name, article.id AS article_id, article.title AS article_title, article.content AS article_content, article.created AS article_created FROM article LEFT JOIN user ON (user.id = article.user_id) WHERE article.need_moderate = 0 ORDER BY article.created DESC').then(resu => {
    console.log('Méret: ' + resu.length);
    for(let i = 0; i < resu.length; i++) {
      console.log(resu[i]);
      ans.push({
        author: resu[i].user_name,
        id: resu[i].article_id,
        article_title: resu[i].article_title,
        content: resu[i].article_content,
        date: resu[i].article_created,
      })
    }
    return res.send(ans);
  }).catch(err => {
    console.log(err);
    res.status(403);
    return res.json({"success":0});
  });
});

router.get('/moderateGetCikk', (req, res) => {
  const ans = [];
  db.query('SELECT user.realname AS user_name, article.id AS article_id, article.title AS article_title, article.content AS article_content, article.created AS article_created FROM article LEFT JOIN user ON (user.id = article.user_id) WHERE article.need_moderate = 1').then(resu => {
    console.log('Méret: ' + resu.length);
    for(let i = 0; i < resu.length; i++) {
      console.log(resu[i]);
      ans.push({
        author: resu[i].user_name,
        id: resu[i].article_id,
        article_title: resu[i].article_title,
        content: resu[i].article_content,
        date: resu[i].article_created,
      })
    }
    return res.send(ans);
  }).catch(err => {
    console.log(err);
    res.status(403);
    return res.json({"success":0});
  });
});

router.post('/moderateAllowCikk', (req, res) => {
  const cikk = req.body;
  if(cikk.id == null || cikk.id === '') {
    return res.json({"success":0}); // Hiányzó adatok esetében
  }

  const p = [
    0,
    cikk.id
  ];

  db.query('UPDATE article SET need_moderate = ? WHERE id = ?', p).then(resu => {
    return res.json({"success":1}); // Sikerült elmenteni
  }).catch(err => {
    console.log(err);
    return res.json({"success":2}); // Adatbázis hiba
  });
});

router.post('/moderateDeleteCikk', (req, res) => {
  const cikk = req.body;
  if(cikk.id == null || cikk.id === '') {
    return res.json({"success":0}); // Hiányzó adatok esetében
  }

  db.query('DELETE FROM article WHERE id = ?', [cikk.id]).then(resu => {
    return res.json({"success":1}); // Sikerült elmenteni
  }).catch(err => {
    return res.json({"success":2}); // Adatbázis hiba
  });
});

router.post('/addCikk', (req, res) => {
  const cikk = req.body;
  if(cikk.title == null || cikk.title === '' ||
     cikk.content == null || cikk.content === '') {
       return res.json({"success":0}); // Hiányzó adatok esetében
     }
  
  const p = [
    req.session.user_id,
    cikk.title,
    cikk.content,
    1
  ];

  db.query('INSERT INTO article (user_id, title, content, need_moderate) VALUES (?,?,?,?)', p).then(resu => {
    return res.json({"success":1}); // Sikerült elmenteni
  }).catch(err => {
    console.log(err);
    return res.json({"success":2}); // Adatbázis hiba
  });
});

module.exports = router;