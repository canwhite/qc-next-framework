import client from "../../../../../client"
import {NextResponse} from "next/server"

export const GET = async (req:Request)=>{
    const {searchParams} = new URL(req.url);
    
    const user = await client.user.create({
        data:{name: "John Doe",
        email: "johndoe@example.com",}
    });
    return NextResponse.json({
        success:true,
        message:"success",
        data:user,
    })
}