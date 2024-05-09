 import User from "@/Model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import dbConnection from "@/dbConnection/dbConnection";
dbConnection()

export async function POST(NextRequest) {
    
    try {
        const reqBody = await NextRequest.json();
    const { email, password } = reqBody;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "User not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return NextResponse.json({ message: "Invalid password" });
        }


        return NextResponse.json({ message: "Login successful", user });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ message: "Internal server error" });
    }
}