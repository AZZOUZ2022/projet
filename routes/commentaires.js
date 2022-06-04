var express = require('express');
const { cookie } =require('express/lib/response');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient(); 

router.get('/', async function(req, res, next) {
  const commentaire =await prisma.commentaire.findMany()
  res.json(commentaire);
});
router.get('/:id', function(req, res, next) {
  const commentaire =commentaires.find((u)=> u.id === parseInt(req.params.id))
  const r= commentaire ? commentaire : 'not found'
  res.send(r);
});
router.delete('/:id', (req, res)=>{
  console.log(req.params.id)
  res.send('ok')
})
router.post('/', async  (req, res)=>{
  const commentaire = await prisma.commentaire.create({
    data: req.body,
  })
  res.json(commentaire)
})
router.patch('/', async (req, res) => {
  const commentaire = await prisma.commentaire.update({
    where: {id: req.body.id},
    data: req.body,
  })
  
  res.send(commentaire)
})
module.exports = router;
