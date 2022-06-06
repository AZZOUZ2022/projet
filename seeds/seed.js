const { faker } = require("@faker-js/faker");

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const categorie = Array.from({length:4}).map(()=>({
    nom: faker.name.jobArea()    
}))

const commentaire = Array.from({length:20}).map(()=>({
  email:faker.internet.email(),
  contenu:faker.lorem.paragraph()
}))

const article = Array.from({length:100}).map(()=>({
    titre:faker.lorem.sentence(),
    contenu:faker.lorem.text(),
    image:faker.image.abstract(),
}))

const user = Array.from({length:10}).map(()=>({
  nom: faker.name.firstName(),
  email:faker.internet.email(),
  password:faker.internet.password(20),
  role:"AUTHOR"
}))

async function main() {

    await prisma.categories.createMany({
        data:categorie
    })

    await prisma.article.createMany({
      data:article
    })

   await prisma.users.createMany({
    data:user
  })

  await prisma.commentaires.createMany({
    data:commentaire
  })

  await prisma.users.create({
    data:{
      nom: faker.name.firstName(),
      email:faker.internet.email(),
      password:faker.internet.password(20),
      role:"ADMIN"
    }
  })

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })