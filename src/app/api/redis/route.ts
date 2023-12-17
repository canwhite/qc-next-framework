import { NextResponse } from 'next/server';
import redis from "../../../../redis";



export const GET = async (req:Requet)=>{

    redis.set('myKey', 'myValue');
    const value = await redis.get('myKey');

    return NextResponse.json({
        success:true,
        message:"success",
        data:value,
    })

}