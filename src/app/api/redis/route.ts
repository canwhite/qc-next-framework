import { NextResponse } from 'next/server';
import redis from "../../../../redis";



export const GET = async (req:Requet)=>{
    const value = await redis.get('myKey');

    return NextResponse.json({
        success:true,
        message:"success",
        data:value,
    })

}