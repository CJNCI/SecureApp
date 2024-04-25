var sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(()=>{
    db.run('CREATE TABLE IF NOT EXISTS users (userid int(11) PRIMARY KEY NOT NULL, email varchar(255), password varchar(255), loginAttempt int(11), roleid INTEGER )');

    const sampleData = [
        ['1','user333@gmail.com','safepassword','0','1']
    ];

    const stmt = db.prepare('INSERT INTO users (userid,email,password,loginAttempt,roleid) values (?,?,?,?,?)')

    sampleData.forEach((row)=>{stmt.run(row)});
    stmt.finalize();
});

module.exports = db;
