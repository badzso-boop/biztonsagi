const express = require('express');
const MariaDBStore = require('express-session-mariadb-store');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

const app = express();

const db = require('./database');
const loginRoutes = require('./routes/login');
const forumRoutes = require('./routes/forum');
const cikkRoutes = require('./routes/cikk');

const db_cred = require('./database_local');

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
  /*store: new MariaDBStore({
    host: 'localhost',
    user: 'c9sql',
    password: 'wNwdH6K@',
    database: 'c9sqldb'
  }),*/
  store: new MariaDBStore(db_cred),
  secret: 'aded_aLEGjobb_szovegSzerkeSZTo',
  resave: false,
  saveUninitialized: false,
  name: 'tudasON',
  cookie: {
    expires: new Date(Date.now() + (2 * 12 * 30 * 86400 * 1000))
  }
}));
app.use('/loginAPI', loginRoutes);
app.use('/forumAPI', forumRoutes);
app.use('/cikkAPI', cikkRoutes);

//app.use(express.static(__dirname + '/public'));

app.get('/getUserData', (req, res) => {
  const user_id = req.session.user_id;

  db.query('SELECT realname, perm_article, perm_admin FROM user WHERE id = ?', user_id).then(resu => {
    return res.json({
      user_id: user_id,
      user_name: resu[0].realname,
      perm_article: resu[0].perm_article,
      perm_admin: resu[0].perm_admin
    });
  }).catch(err => {
    console.log(err);
    return res.json({});
  });
});

app.get('/hello', (req, res) => {
    return res.send('<h1>Node</h1>');
});

app.get('/exit', (req, res) => {
  req.session.destroy();
  return res.redirect('/nodejs/cikk');
});

app.get('/teszt', (req, res) => {
  return res.send('<h1>Működik, nyugi!</h1>');
});

app.use(express.static(path.join(__dirname, '../react/build')));
app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../react/build/index.html'));
});

app.listen(8190);
