import {MongoClient} from 'mongodb';

export const setDatabaseData = async (collectionName, data)=>{
    const client = await MongoClient.connect(
        'mongodb://localhost:27017/TEST_DB',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    );
    const db = client.db('TEST_DB');
    //tets
  
    await db.collection(collectionName).insertMany(data);
   
    client.close();//close before assertions in case they fail

};

export const getDatabaseData = async collectionName =>{
    const client = await MongoClient.connect(
        'mongodb://localhost:27017/TEST_DB',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    );
    const db = client.db('TEST_DB');
    
  
    const result  = await db.collection(collectionName).find().toArray();
   
    client.close();

    return result;


};



export const resetDatabase= async ()=>{
    const client = await MongoClient.connect(
        'mongodb://localhost:27017/TEST_DB',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    );
    const db = client.db('TEST_DB');
    //tets
  
    await db.dropDatabase();
   
    client.close();//close before assertions in case they fail

}