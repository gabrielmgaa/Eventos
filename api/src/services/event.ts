
import { prisma } from "../utils/prisma"

export async function findEventByName(name: string){

  return await prisma.event.findFirst({
    where: {
      name
    }
  })
  

}