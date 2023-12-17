
import client from "../client"
export const getAllUsers = async ()=>{
    const  users =  client.user.findMany({
        include: {
            posts: true,
          },
    })
    return users;
}

export const createUser = async ()=>{
    const user = await client.user.create({
        data: {
          name: 'Bob',
          email: 'bob@prisma.io',
          posts: {
            create: {
              title: 'Hello World',
            },
          },
        },
      })
    return user;
}