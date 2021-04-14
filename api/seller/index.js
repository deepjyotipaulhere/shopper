import express from 'express'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const conn = new pg.Pool({
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
})
let router = express.Router()

router.post("/register", (req, res) => {
    const { name, email, password, mobile, lat, lng, address, photo } = req.body
    conn.query(`INSERT INTO seller(seller_name,email,password,mobile,location,address,photo) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING "ID"`, [name, email, password, mobile, lat + "," + lng, address, photo]).then((res1, err) => {
        res.json(res1.rows[0])
    }).catch(err => {
        res.status(500).json(err)
    })
})

export default router;