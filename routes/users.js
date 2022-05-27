var express = require('express');
const { cookie } =require('express/lib/response');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient(); 
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users =await prisma.user.findMany()
  res.json(users);
});
router.get('/:id', function(req, res, next) {
  const user =users.find((u)=> u.id === parseInt(req.params.id))
  const r= user ? user : 'not found'
  res.send(r);
});
router.delete('/:id', (req, res)=>{
  console.log(req.params.id)
  res.send('ok')
})
router.post('/', async  (req, res)=>{
  const user = await prisma.user.create({
    data: req.body,
  })
  res.json(user)
})
router.patch('/', async (req, res) => {
  const user = await prisma.user.update({
    where: {id: req.body.id},
    data: req.body,
  })
  res.send(user)
})
module.exports = router;
