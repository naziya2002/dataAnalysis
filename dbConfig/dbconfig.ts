import mongoose from 'mongoose'


export async function connect(){
    try{
mongoose.connect(process.env.MONGO_URL!)
const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log('MongoDb connected sucessfully')
})
connection.on('error',(err)=>{
    console.log('MongoDb Encourted Error'+err)
    process.exit()

})
    }catch(error){
        console.log('something goes wrong')
        console.log(error)
    }
}