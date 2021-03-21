import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import sellerRouter from './seller/index.js'
import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(cors())

const pool=new pg.Client({
    // host: process.env.Host,
    // database: process.env.Database,
    // user: process.env.User,
    // port: process.env.Port,
    // password: process.env.Password,
    // ssl:false,
    connectionString:process.env.POSTGRES_URL
})

app.use("/seller", sellerRouter)

app.get("/", (req, res) => {
    pool.query("SELECT NOW()").then((res1,err)=>{
        res.send(res1.rows)
    })
    // res.send(process.env.POSTGRES_URL)
})

app.listen(5000, () => "API Server started on 5000")