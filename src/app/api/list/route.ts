import {NextResponse} from "next/server"

//GET/PUT/POST/DELETE

export const GET = async (req:Request)=>{
    const {searchParams} = new URL(req.url);
    console.log(searchParams);
    return NextResponse.json({
        success:true,
        message:"success",
        data:[Object.fromEntries(searchParams)],
    })
}

//curl -X POST -H "Content-Type: application/json"
// -d '{"key1": "value1", "key2": "value2"}' http://127.0.0.1:3000/api/list
export const POST = async (req:Request)=>{
    const data = await req.json();
    return NextResponse.json({
        success:true,
        message:"success",
        data
    })
}




