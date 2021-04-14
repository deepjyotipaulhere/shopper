import express from 'express'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const conn = new pg.Pool({
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
})
const router = express.Router()

// Create a new shop category
router.post("/createcategory", (req, res) => {
    const { name } = req.body;
    conn.query(`INSERT INTO shop_category(type) VALUES($1) RETURNING "ID",type`, [name]).then(response => {
        res.json(response.rows[0])
    }).catch(err => {
        res.status(500).send(err)
    })
})

router.get("/getcategory", (req, res) => {
    conn.query("SELECT * FROM shop_category").then(response => {
        res.json(response.rows)
    }).catch(err => {
        res.status(500).json(err)
    })
})


router.post("/register", (req, res) => {
    const { name, lat, lng, categories, established, isonline, address, sellerid } = req.body
    conn.query(`WITH rows AS(INSERT INTO shop(name, location, category, established, isonline, active, address)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING "ID",name) INSERT INTO seller_shop(seller_id,shop_id,joined_on) 
        SELECT '${sellerid}',"ID",CURRENT_TIMESTAMP FROM rows RETURNING SELLER_ID,SHOP_ID`,
        [name, lat + "," + lng, categories, established, isonline, true, address]
    ).then(response => {
        res.json(response.rows[0])
    }).catch(err => {
        res.status(500).send(err)
    })
})


router.post("/addproduct", (req, res) => {
    const { name, price, date, shopid, picture } = req.body
    console.log(req.body);

    // TODO Insert pictures in a folder
    
    conn.query(`INSERT INTO product(name,price,date,shop_id,picture) VALUES($1,$2,$3,$4,$5) RETURNING "ID"`, [name, price, date, shopid, picture]).then(response => {
        res.json(response.rows[0])
    }).catch(err => {
        res.status(500).send(err)
    })
})

export default router;