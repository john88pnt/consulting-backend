// test-db.js
const pool = require('./db');

(async () => {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('✅ Database connected successfully:', result.rows[0]);
        process.exit(0);
    } catch (err) {
        console.error('❌ Database connection error:', err);
        process.exit(1);
    }
})();
