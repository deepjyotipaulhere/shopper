import express from 'express'
import pg from 'pg'

const conn = new pg.Pool({
    user: 'postgres',
    password: '1234',
    database: process.env.DB
})
const router = express.Router()

// Create a new shop category
router.post("/createcategory", (req, res) => {
    const { name } = req.body;
    conn.query(`INSERT INTO shop_category(type) VALUES($1) RETURNING "ID",type`, [name]).then(response => {
        res.json(response.rows[0])
    }).catch(err => {
        res.json(500).send(err)
    })
})

router.get("/getcategory", (req, res) => {
    conn.query("SELECT * FROM shop_category").then(response => {
        res.json(response.rows)
    }).catch(err=>{
        res.status(500).json(err)
    })
})


router.post("/register", (req, res) => {
    const { name, lat, lng, categories } = req.body
    conn.query("SELECT * FROM shop").then((res1, err) => {
        res.json(res1.rows)
    })
})

export default router;