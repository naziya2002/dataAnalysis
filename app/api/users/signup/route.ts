import {connect} from "@/dbConfig/dbconfig";
import User from "@/models/userModal";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import {toast} from "react-toastify"




connect()



export async function POST(request:NextRequest) {
    try{
const reqBody=await request.json()
const {username,email,password}=reqBody
console.log(reqBody)
//check if user alredy exists
const user=await User.findOne({email})
if(user){
    toast.success("User alredy Exist")

    return NextResponse.json({error:"User alredy exists"},
    {status:400})
   }

//hash password
const salt =await bcryptjs.genSalt(10)
const hashedPassword=await bcryptjs.hash(password,salt)

const newUser =new User({
    username,
    email,
    password:hashedPassword
})
const savedUser=await newUser.save()
console.log(savedUser);
toast.success("UserCreated")

return NextResponse.json({
    
    message:"User Created Sucessfully",
    sucess:true,
    savedUser
})

    }catch (error:any){
        toast.error("alertttt")

        return NextResponse.json({error:error.message},
            {status:500})
    }
    
}