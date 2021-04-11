const express = require('express');
const path = require('path');
const crypto = require('crypto');
const session = require('express-session');
const db = require(path.resolve('database'));

const router = express.Router();

/*router.get('/login', (req, res) => {
  return res.sendFile(path.resolve('public/login.html'));
});*/

router.get('/teszt', (req, res) => {
  return res.send('<h1>Működik, nyugi!</h1>');
});

router.post('/login', (req, res) => {
  let login = req.body;

  if(login.email === undefined || login.email === "" ||
     login.password === undefined || login.password === "") {
    res.status(400);
    return res.json({"success":0});
  }

  db.query('SELECT password, id FROM user WHERE email = ?', login.email).then(resp => {
    if(resp[0] === undefined) {
      return res.json({"success":1});
    }
    
    const pass = resp[0].password;
    const id = resp[0].id;

    let hash = crypto.createHash('sha384');    
    let data = hash.update(login.password, 'utf-8');
    let pass2 = data.digest('hex');
    
    if(pass === pass2) {
      req.session.user_id = id;
      console.log(req.session.user_id);
      return res.json(200, {"success":2});
    }

    return res.json({"success":1});
  }).catch(err => {
    console.log(err);
    return res.json({"success":1});
  });
});

router.post('/signup', (req, res) => {
  let login = req.body;
  if(login.nev == null || login.nev === "" ||
     login.email == null || login.email === "" ||
     login.password == null || login.password === "" ||
     login.password2 == null || login.password2 === "") {
    res.status(400);
    return res.json({"success":0});
  }

  console.log(login);

  if(login.password !== login.password2) {
    res.status(400);
    return res.json({"success":2});
  }
  let p = [
    login.nev,
    login.email,
    login.password,
    1,
    0
  ];

  console.log(login);
  db.query('INSERT INTO user(realname, email, password, perm_article, perm_admin) values (?,?,SHA2(?,384),?,?)', p).then(result => {
    db.query('SELECT LAST_INSERT_ID()').then(resu => {
      req.session.user_id = resu[0].id;
      console.log(resu[0].id);
      return res.json(200, {"success":3});
    }).catch(err => {
      console.log(err);
      return res.json({"success":1});
    });
  }).catch(err => {
    console.log(err);
    return res.json({"success":1});
  });
});

module.exports = router;
