import express from 'express';
import db from './db';

const app = express();

app.get('/users/:username', async (req,res)=>{
    const {username}=req.params;
    try {
        const user =await db.getUserByUsername(username);
        
        
        if(!user){
            res.status(404).json(user);
        } else {
            res.json(user);
        }
    } catch (e){
        res.status(500).json(e);
    }

}) //user/someonelse

export {app};