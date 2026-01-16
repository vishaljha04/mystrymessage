import { Schema, model } from "mongoose";

export interface Message {
  content: string;
  createdAt: Date;
}

export const MessageSchema = new Schema<Message>({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const MessageModel = model<Message>("Message", MessageSchema);
