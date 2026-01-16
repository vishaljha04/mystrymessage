import * as React from "react";
import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface VerificationEmailTemplateProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailTemplateProps) {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={heading}>
              🔐 Verify your Mystry Message account
            </Heading>

            <Text style={text}>
              Hi <strong>{username}</strong>,
            </Text>

            <Text style={text}>
              Welcome to <strong>Mystry Message</strong>!  
              Use the verification code below to complete your signup.
            </Text>

            <Section style={otpContainer}>
              <Text style={otpText}>{otp}</Text>
            </Section>

            <Text style={text}>
              This code is valid for the next <strong>10 minutes</strong>.
              If you didn’t request this, you can safely ignore this email.
            </Text>

            <Hr style={hr} />

            <Text style={footer}>
              — Team Mystry Message 💌
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}


const main = {
  backgroundColor: "#0f172a",
  fontFamily: "Arial, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0",
};

const section = {
  backgroundColor: "#020617",
  borderRadius: "8px",
  padding: "32px",
  color: "#e5e7eb",
};

const heading = {
  color: "#38bdf8",
  marginBottom: "16px",
};

const text = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#e5e7eb",
};

const otpContainer = {
  backgroundColor: "#020617",
  border: "1px dashed #38bdf8",
  borderRadius: "6px",
  padding: "16px",
  margin: "20px 0",
  textAlign: "center" as const,
};

const otpText = {
  fontSize: "24px",
  letterSpacing: "6px",
  fontWeight: "bold",
  color: "#38bdf8",
};

const hr = {
  borderColor: "#1e293b",
  margin: "24px 0",
};

const footer = {
  fontSize: "12px",
  color: "#94a3b8",
  textAlign: "center" as const,
};
