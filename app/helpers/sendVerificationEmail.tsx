import { resend } from "../lib/Resend";
import VerificationEmail from '../../emails/email-template';
import { ApiResponse } from "../types/ApiResponse";

export const SendVerificationEmail = async (email:string,username:string,verifyCode:string):Promise<ApiResponse> => {
    try {
        await resend.emails.send({
            from:'vjha93011@gmail.com',
            to:email,
            subject:"Verfication code for mystry message signup",
            react:<VerificationEmail username={username} otp={verifyCode} />
        })
        return {success:true,messgae:"Verification Email Send successfully"}
    } catch (emailError) {
        console.error("Error Sending Verification Email",emailError)
        return {success:false,messgae:"Failed to send Verification Email"}
    }
}