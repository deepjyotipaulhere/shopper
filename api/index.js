import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import sellerRouter from './seller/index.js'
import shopRouter from './shop/index.js'
import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(cors())

const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_URL
})

app.use("/seller", sellerRouter)
app.use("/shop", shopRouter)

app.get("/", (req, res) => {
    pool.query("SELECT NOW()").then((res1, err) => {
        res.send(res1.rows[0])
    })
})

app.listen(5000, () => "API Server started on 5000")