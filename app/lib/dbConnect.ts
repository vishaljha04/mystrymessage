import mongoose, { mongo } from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection: ConnectionObject = {}

const dbConnect = async ():Promise<void> => {
    if(connection.isConnected){  //check for already connection with Database to prevent choking of connections in database due to multiple requests (good practice)
        console.log("Already connected to database");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '');
        connection.isConnected = db.connections[0].readyState;
        console.log("DB Connected Successfully!!")
    } catch (error) {
        console.log("Database connection failed",error)
        process.exit(1)
    }
}

export default dbConnect;