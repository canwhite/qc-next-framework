import { NextResponse } from 'next/server';
import redis from "../../../../redis";

export const GET = async (req:Requet)=>{
    const {searchParams} = new URL(req.url);
    const value = 'myValue'; //这里从search params里取
    redis.set('myKey', value);
    return NextResponse.json({
        success:true,
        message:"success",
        data:value,
    })
}