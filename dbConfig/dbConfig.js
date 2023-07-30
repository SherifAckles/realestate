import mongoose from 'mongoose'

export async function connect(){
    try {
       mongoose.connect(process.env.MONGO_URI) 

       const connection=mongoose.connection
       connection.on('connected', ()=>{
        console.log('Mongo DB connected successfully')
       })
    } catch (error) {
        console.log('something went wrong')
        console.error('Error message:', error.message);
    }
}