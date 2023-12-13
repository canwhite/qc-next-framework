import { getAllUser } from './../../../../services/userService';
import {NextResponse} from "next/server"

export const GET = async (req:Request)=>{
    const {searchParams} = new URL(req.url);
    //todo
    const allUsers = await getAllUser();
    return NextResponse.json({
        success:true,
        message:"success",
        data:allUsers,
    })
}