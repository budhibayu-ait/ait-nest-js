// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy recipes
  const product1 = await prisma.product.create({
    data: {
      name: 'Spaghetti Bolognese',
      description: 'A classic Italian dish',
    }
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Chicken Curry',
      description: 'A spicy Indian dish',
    }
  });

  console.log({ product1, product2 });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });