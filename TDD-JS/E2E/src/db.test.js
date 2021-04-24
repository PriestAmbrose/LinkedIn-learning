import {MongoClient} from 'mongodb'
import {getUserByUsername} from './db'
import {expect} from 'chai'

describe('getUserByUsername',  ()=>{
    it('get the correct user from othe database given a usernam',async ()=>{
        const client = await MongoClient.connect(
            'mongodb://localhost:27017/TEST_DB',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
        );
        const db = client.db('TEST_DB');
        //tets
        const fakeData = [{
            id: '123',
            username :'abc',
            email: 'abc@gmail.com',
        },{
            id: '124',
            username: 'wrong',
            email: 'wrong@wrong.com',
        }];
        await db.collection('users').insertMany(fakeData);
        const actual  = await getUserByUsername('abc');
        const finalDBState  = await db.collection('users').find().toArray();//real state of db
        await db.dropDatabase(); //reset databse doesnt' effect other tests
        client.close();//close before assertions in case they fail

        const expected = {
            id: '123',
            username :'abc',
            email: 'abc@gmail.com',
        }

        expect(actual).excludingEvery('_id').to.deep.equal(expected);
        expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData); //final db is equal to initial

    });
})