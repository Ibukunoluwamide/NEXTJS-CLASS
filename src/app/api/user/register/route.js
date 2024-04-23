import  dbConnection  from "@/dbConnection/dbConnection";
import User from "@/Model/userModel"
import { NextRequest, NextResponse } from "next/server";

dbConnection()

export async function POST(NextRequest) {
   try {
    const reqBody = await NextRequest.json()
    const {fullName, email, password} = reqBody
    console.log(reqBody);
    const user =  await User.findOne({email})
    if (user) {
      return NextResponse.json({status: 400, message: "user already exist"})  
    }
    const newUser = new User({fullName, email, password})
    const savedUser =  await newUser.save();
    if (savedUser) {
        return NextResponse.json({status: 200, message: "user saved successfully"})  
    }else{
        return NextResponse.json({status: 400, message: "not saved"})  
        
    }
    
} catch (error) {
       return NextResponse.json(error)  
   } 
}