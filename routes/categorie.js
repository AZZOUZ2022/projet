var express = require('express');
const { cookie } =require('express/lib/response');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient(); 

router.get('/', async function(req, res, next) {
  const categorie =await prisma.categorie.findMany()
  res.json(categorie);
});
router.get('/:id', function(req, res, next) {
  const categorie =categories.find((u)=> u.id === parseInt(req.params.id))
  const r= categorie ? categorie : 'not found'
  res.send(r);
});
router.delete('/:id', (req, res)=>{
  console.log(req.params.id)
  res.send('ok')
})
router.post('/', async  (req, res)=>{
  const categorie = await prisma.categorie.create({
    data: req.body,
  })
  res.json(categorie)
})
router.patch('/', async (req, res) => {
  const categorie = await prisma.categories.update({
    where: {id: req.body.id},
    data: req.body,
  })
  
  res.send(categories)
})
module.exports = router;
