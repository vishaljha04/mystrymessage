import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/app/models/User.model";
import bcrypt from "bcryptjs";
import { SendVerificationEmail } from "@/app/helpers/sendVerificationEmail";
import { success } from "zod";

export const POST = async (request: Request) => {
  await dbConnect();
  try {
    const {username,email,password} = await request.json()
    if(username || email || password){return Response.json({success:false,message:"All fields are required"},{status:400})}
    const UserExist = await UserModel.findOne({email});
    if(!UserExist){
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({ username, email, password: hashedPassword });
    }
  } catch (error: any) {
    console.error('Error registering user',error);
    return Response.json({
        success:false,message:"error registering user"
    }),{status:500}
  }
};