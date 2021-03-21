import express from 'express'
import pg from 'pg'

const conn = new pg.Pool({
    // connectionString: process.env.POSTGRES_URL
    user: 'postgres',    
    password: '1234',
    database: process.env.DB
})
let router = express.Router()

router.post("/register", (req, res) => {
    const { name, lat, lng, categories } = req.body
    conn.query("SELECT * FROM seller").then((res1, err) => {
        res.json(res1.rows)
    })
})

export default router;