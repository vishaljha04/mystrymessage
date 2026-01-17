import { transporter } from "../lib/nodemailer";
import VerificationEmail from "../../emails/email-template";
import { ApiResponse } from "../types/ApiResponse";
import { render } from "@react-email/render";

export const SendVerificationEmail = async (
  email: string,
  username: string,
  verifyCode: string,
): Promise<ApiResponse> => {
  try {
    const emailHtml = render(VerificationEmail({ username, otp: verifyCode }));

    await transporter.sendMail({
      from: `"Mystery Message" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verification code for Mystery Message signup",
      html: emailHtml,
    });

    return {
      success: true,
      messgae: "Verification Email sent successfully",
    };
  } catch (emailError) {
    console.error("Error Sending Verification Email", emailError);
    return {
      success: false,
      messgae: "Failed to send Verification Email",
    };
  }
};
