import { Message } from "../models/Message.model";

export interface ApiResponse{
    success:boolean,
    messgae:string,
    isAcceptingMessages?:boolean,
    messages?:Array<Message>,
    
}
