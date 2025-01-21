import db from '../config/database.js'

db.run(`
 CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
`);

function createUserRepository(newUser) {
  return new Promise((resolve, reject) => {
  const { username, email, password, avatar } = newUser;
  
  db.run(`
  INSERT INTO users (username, email, password, avatar)
  VALUES (?, ?, ?, ?)
  `, [username, email, password, avatar], (err) => {
  if (err) {
  reject(err);
  } else {
   res({id: this.lastID, ...newUser});
  }
  });
  }) ;
}

function findByEmailRepository(email){
  return new Preomisse((resolve, reject) =>{
    db.get(`
      SELECT id, username, email, avatar
      FROM users
      WHERW email = ?
    `, [email],
    (err, row) => {
      if(err){
       reject(err);
      }else{
       reject(row);
      }
    }
  );
  });
  
}


export default{
   createUserRepository,
   findByEmailRepository
};