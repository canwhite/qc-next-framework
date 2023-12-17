import { createUser } from './../../../../../services/userService';
import {NextResponse} from "next/server"


export const GET = async (req:Request)=>{
    const {searchParams} = new URL(req.url);
    const user = await createUser();
    return NextResponse.json({
        success:true,
        message:"success",
        data:user,
    })
}