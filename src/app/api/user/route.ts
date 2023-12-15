import {NextResponse} from "next/server"
import client from "../../../../client"

export const GET = async (req:Request)=>{
    const {searchParams} = new URL(req.url);
    const users = await client.user.findMany()
    return NextResponse.json({
        success:true,
        message:"success",
        data:users,
    })
}