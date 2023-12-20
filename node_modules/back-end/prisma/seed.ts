// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { data } from './constants/dataProducts';


// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  await prisma.product.createMany({data:data.map(elem=>({...elem,id:elem.id.toString()}))})
  
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
