import {NextResponse} from "next/server"

//curl -X PUT  http://127.0.0.1:3000/api/list/123
export const PUT = async (req:Request,params:{id:string})=>{
    console.log(params);
    return NextResponse.json({
        success:true,
        message:"edit success",
        data:{}
    })
}

//curl -X DELETE  http://127.0.0.1:3000/api/list/123
export const DELETE = async (req:Request,params:{id:string})=>{
    console.log(params);
    return NextResponse.json({
        success:true,
        message:"delete success",
        data:{}
    })
}