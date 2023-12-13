
import { Yaldevi } from "next/font/google";
import User from "../entities/User";
export const getAllUser = async ()=>{
    const allUsers = await User.findAll()
    return allUsers;
}

export const saveUser = async ()=>{
    const user = await User.create({
        firstName: "zhang",
        lastName: "san",
    });
    user.save();
}