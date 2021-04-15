import express from 'express'
import pg from 'pg'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            if (!req.headers.mac) return res.status(500).json({ status: false, message: "Illegal Access" })
            if (user.mac != req.headers.mac) {
                return res.status(500).json({ status: false, message: "You have changed device! Please sign in again." })
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const conn = new pg.Pool({
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
})
let router = express.Router()


// Seller Registration
router.post("/register", (req, res) => {
    const { name, email, password, mobile, lat, lng, address, photo } = req.body
    conn.query(`INSERT INTO seller(seller_name,email,password,mobile,location,address,photo) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING "ID"`, [name, email, password, mobile, lat + "," + lng, address, photo]).then((res1, err) => {
        res.json(res1.rows[0])
    }).catch(err => {
        res.status(500).json(err)
    })
})


// Seller Login
router.post("/signin", (req, res) => {
    const { username, password, mac } = req.body
    conn.query(`SELECT * FROM seller WHERE (email=$1 OR mobile=$2) AND password=$3`, [username, username, password]).then((response, err) => {
        if (err) res.status(500).json({ status: false, err })
        if (response.rows.length > 0) {
            var token = jwt.sign({ sellerid: response.rows[0].ID, mac }, process.env.SECRET, { algorithm: 'HS512' })
            conn.query(`SELECT b."ID",b.name FROM seller_shop a INNER JOIN shop b ON a.shop_id=b."ID" WHERE a.seller_id=$1`, [response.rows[0].ID]).then(resshop => {
                res.json({ token, shops: resshop.rows })
            })
        }
        else {
            res.status(500).json({ status: false, err: "Incorrect username or password" })
        }
    }).catch(err => {
        res.status(500).json(err)
    })
})


// Get seller shops
router.get("/shops", authenticateJWT, (req, res) => {
    conn.query(`SELECT b.* FROM seller_shop a INNER JOIN shop b ON a.shop_id=b."ID" WHERE a.seller_id=$1`, [req.user.sellerid]).then(resshop => {
        res.json({ shops: resshop.rows })
    })
})


// Get products of shop
router.get("/products", authenticateJWT, (req, res) => {
    conn.query(`SELECT * FROM seller_shop a WHERE a.seller_id=$1 AND a.shop_id=$2`, [req.user.sellerid, req.query.id]).then(resp => {
        if (resp.rowCount > 0) {
            conn.query(`SELECT * FROM product WHERE shop_id=$1`, [req.query.id]).then(resshop => {
                res.json({ shops: resshop.rows })
            })
        }
        else {
            res.status(500).json({ status: false, err: "You are not authorized" })
        }
    })
})

export default router;