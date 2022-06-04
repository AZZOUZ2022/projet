var express = require('express');
const { cookie } =require('express/lib/response');
var router = express.Router();

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient(); 
/* GET articles listing. */
router.get('/', async function(req, res, next) {
  const article =await prisma.article.findMany()
  res.json(article);
});
router.get('/:id', function(req, res, next) {
  const article =article.find((u)=> u.id === parseInt(req.params.id))
  const r= article ? article : 'not found'
  res.send(r);
});
router.delete('/:id', async (req, res)=>{
    const articleID = req.params.id;
  const deletedArticle = await prisma.article.delete({
      where:{
          id: Number (articleID)
      }
  })
  res.json(deletedArticle)
})
router.post('/', async  (req, res)=>{
  const article = await prisma.article.create({
    data: req.body,
  })
  res.json(article)
})
router.patch('/', async (req, res) => {
  const article = await prisma.article.update({
    where: {id: req.body.id},
    data: req.body,
  })
  res.send(article)
})
module.exports = router;
