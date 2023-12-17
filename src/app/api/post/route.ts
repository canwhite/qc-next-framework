import { NextResponse } from "next/server"

//再进一步具体化
export const GET = (req:Request)=>{
    const {searchParams} = new URL(req.url);
    return NextResponse.json({
        success:true,
        message:"success",
        data:searchParams,
    })
}