const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.end('artiles')
})

module.exports=router