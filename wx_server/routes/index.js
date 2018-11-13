const express = require("express");
const pool = require("../pool");

var router = express.Router();

router.get("/lunbo",(req,res)=>{
    var sql = " SELECT `lid`, `img_url`, `title` FROM `lunbolist` ";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,body:result});
    })
})

router.get("/nav",(req,res)=>{
    var sql = " SELECT `id`, `img_url`, `title` FROM `navlist` ";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,body:result});
    })
})

router.get("/activity",(req,res)=>{
    var sql = " SELECT `id`, `img_url`, `title` FROM `activitylist` ";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,body:result});
    })
})

router.get("/blocklist",(req,res)=>{
    var sql = " SELECT `id`, `img_url` FROM `blocklist` ";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,body:result});
    })
})

router.get("/goodslist",(req,res)=>{
    var sql = " SELECT `id`, `img_url`, `title`, `desp`, `meta`, `discount` FROM `goodslist` ";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,body:result});
    })
})

router.get("/videolist",(req,res)=>{
    var sql = " SELECT `id`, `img_url`, `header`, `desp` FROM `videolist` ";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send({code:1,body:result});
    })
})



module.exports = router;