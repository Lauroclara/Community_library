import db from '../config/database.js'

db.run(`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT NOT NULL,
    passoword TEXT NOT NULL,
    avatar TEXT
    )
`)

function createUserRepository(newUser) {
  return new Promisse((res, rej) =>{
    const {username, email, password, avatar} = newUser;
    db.run(
       `
       INSERT INTO users (username, email, passoword, avatar)
       VAlUES (?, ?, ?. ?)
       `,
       [username, email, password, avatar],   
       (err) => {
        if(err) {
          rej(err)  
        } else {
          res({message: 'User created'})
        }
       }
    )
  }) 
}


export default{
   createUserRepository

}