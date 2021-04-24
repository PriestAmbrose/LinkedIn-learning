import sinon from 'sinon';
import request from 'supertest';
import {expect} from 'chai';
import db from './db';
import {app} from './server';

describe('GEt /users/:username', ()=>{
    it('sends the correct response when a user with the username', async ()=>{
        const fakeData  = {
            id: '123',
            username :'abc',
            email: 'abc@gmail.com',
        };

        const stub = sinon
            .stub(db,'getUserByUsername')
            .resolves(fakeData);

        await request(app).get('/users/abc')   // how rou server behaves
            .expect(200)
            .expect('Content-Type',/json/)
            .expect(fakeData);

        expect(stub.getCall(0).args[0]).to.equal('abc');

        stub.restore();

    });

    it('sends a correct response whenever is error', async ()=>{
        const fakeError = {message:'something went wrong!'};
        const stub = sinon.stub(db,'getUserByUsername')
            .throws(fakeError);

        await request(app).get('/users/abc')
            .expect(500)
            .expect('Content-Type',/json/)
            .expect(fakeError);

        stub.restore();
    });

    

    it('returns the appropriate response when the user is not found', async ()=>{
      
        const stub = sinon
            .stub(db,'getUserByUsername')
            .resolves(null);

        await request(app).get('/users/absent')   // how rou server behaves
            .expect(404)
           

        expect(stub.getCall(0).args[0]).to.equal('absent');

        stub.restore();

    });
});