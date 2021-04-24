import {MongoClient} from 'mongodb'

const DB_NAME = process.env.NODE_ENV === 'test'
? 'TEST_DB'
: 'PROD_DB';


export const getUserByUsername = async username => {
    const client = await MongoClient.connect(
        `mongodb://localhost:27017/${DB_NAME}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    );
    const db = client.db('TEST_DB');
    const result = await db.collection('users').findOne({username});
    client.close();
    //console.log('null test returns now', result, username);
    return result;
}

export default{
    getUserByUsername,
}