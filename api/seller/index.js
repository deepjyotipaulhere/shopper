import express from 'express'
import pg from 'pg'

// const pool = new pg.Pool({
//     host: process.env.Host,
//     database: process.env.Database,
//     user: process.env.User,
//     port: process.env.Port,
//     password: process.env.Password
// })
const conn=new pg.Client({
    host: process.env.Host,
    database: process.env.Database,
    user: process.env.User,
    port: process.env.Port,
    password: process.env.Password
})
// pool.on('error', (err, client) => {
//     console.error('Unexpected error on idle client', err)
//     process.exit(-1)
// })

// pool.query("SELECT NOW()", (res, err) => {
//     console.log(res);
//     pool.end()
// })
let router = express.Router()

router.post("/register", (req, res) => {
    const { name, lat, lng, categories } = req.body
    conn.query("SELECT * FROM seller").then((res1, err) => {
        res.json(res1.rows)
    })
})

export default router;