const mariadb = require('mariadb');

const db_cred = require('./database_local');

const pool = mariadb.createPool(db_cred); 

module.exports = pool;
