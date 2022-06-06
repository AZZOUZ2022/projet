var express = require('express');
const { cookie } =require('express/lib/response');
var router = express.Router();
const bcrypt = require('bcrypt')

const {PrismaClient} = require('@prisma/client');
const { hash } = require('bcrypt');
const prisma = new PrismaClient(); 
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users =await prisma.users.findMany()
  res.json(users);
});
router.get('/:id', function(req, res, next) {
  const user =users.find((u)=> u.id === parseInt(req.params.id))
  const r= user ? user : 'not found'
  res.send(r);
});
router.delete('/:id', async (req, res)=>{
  const auserID = req.params.id;
const deleteduser = await prisma.users.delete({
    where:{
        id: Number (auserID)
    }
})
res.json(deleteduser)
})

router.post('/', async  (req, res)=>{
  try{
    const sl = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(res.body.password, sl)
    console.log(sl);
    console.log(hashedPassword)
    const user = {nom: req.body.nom, password: hashedPassword}
    res.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
  })
router.patch('/', async (req, res) => {
  const user = await prisma.users.update({
    where: {id: req.body.id},
    data: req.body,
  })
  res.send(user)
})
module.exports = router;
