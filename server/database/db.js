import mongoose from 'mongoose';

const Connection=async(username,password)=>{
    const URL =`mongodb://imrks02:9649385555@ecommerceweb-shard-00-00.ts3vp.mongodb.net:27017,ecommerceweb-shard-00-01.ts3vp.mongodb.net:27017,ecommerceweb-shard-00-02.ts3vp.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-10f54s-shard-0&authSource=admin&retryWrites=true&w=majority `
    try {
   await mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology:true,});
    console.log('database connection sucessfully');
        
    } catch (error) {
        console.log('Error: ',error.message);
    } 
}
export default Connection; 