// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',         // utilizatorul tău PostgreSQL
  host: 'localhost',
  database: 'consulting_site',
  password: '1234',         // parola pe care ai setat-o la instalare
  port: 5432,
});

module.exports = pool;
