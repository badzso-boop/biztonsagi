const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require(path.resolve('database'));

const router = express.Router();

router.get('/teszt', (req, res) => {
  return res.send('<h1>' + req.session.user_id + '</h1>');
});

// ------------- TOPIC -------------
router.get('/getTopic', (req, res) => {
  const ans = [];
  db.query('SELECT user.realname AS user_name, topic.id AS id, topic.title AS title, topic.created AS created FROM topic LEFT JOIN user ON (user.id = topic.user_id) ORDER BY topic.created DESC').then(resu => {
    for(let i = 0; i < resu.length; i++) {
      ans.push({
        success: 1,
        id: resu[i].id,
        author: resu[i].user_name,
        title: resu[i].title,
        created: resu[i].created,
      });
    }
    return res.send(ans);
  }).catch(err => {
    console.log(err);
    return res.json({"success":0});
  });
});

router.post('/addTopic', (req, res) => {
  const topic = req.body;
  if(topic.title == null || topic.title === '') {
    return res.json({"success":0});
  }

  const p = [
    req.session.user_id,
    topic.title
  ];

  db.query('INSERT INTO topic (user_id, title) values (?, ?)', p).then(resu => {
    return res.json({"success":1}); // Sikeres mentés
  }).catch(err => {
    console.log(err);
    return res.json({"success":2}); // Adatbázis hiba
  });
});

// ------------- FORUM ITEMS -------------
router.get('/getForum/:id', (req, res) => {
  if(!req.params.id.match(/^\d+$/)) { // Megnézzük, hogy az id szám-e
    res.status(403);
    return res.json({"success":"Ehhez nincs jogod hacker barátom!"});
  }
  
  const ans = [];

  const id = req.params.id;
  // TODO: fixálni ezt
  //db.query('SELECT * FROM post WHERE topic_id = ?', id).then(resu => {
  db.query('SELECT user.realname AS user_name, post.id AS id, post.topic_id AS topic_id, post.user_id AS user_id, post.content AS content, post.created AS created FROM post LEFT JOIN user ON (user.id = post.user_id) WHERE post.topic_id = ? ORDER BY post.created DESC', id).then(resu => {
    if(resu[0] == undefined) {
      return res.json({"success":0});
    }
    for(let i = 0; i < resu.length; i++) {
      ans.push({
        success: 1,
        id: resu[i].id,
        topic_id: resu[i].topic_id,
        user_id: resu[i].user_id,
        author: resu[i].user_name,
        content: resu[i].content,
        created: resu[i].created,
      });
    }
    return res.send(ans);
  }).catch(err => {
    console.log(err);
    return res.json({"success":2});
  });
});

router.post('/addForum', (req, res) => {
  const forum = req.body;

  if(forum.topic_id == null || forum.topic_id === '' ||
     forum.comment == null || forum.comment === '') {
      return res.json({"success":0});
  }

  const p = [
    forum.topic_id,
    req.session.user_id,
    forum.comment
  ];

  db.query('INSERT INTO post (topic_id, user_id, content) values(?,?,?)', p).then(resu => {
    return res.json({"success":1});
  }).catch(err => {
    console.log(err);
    return res.json({"success":2});
  });
});

module.exports = router;