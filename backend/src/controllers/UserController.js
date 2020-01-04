import User from '../database/models/User';
import { Op } from 'sequelize';
import bcrypt from 'bcryptjs';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

module.exports = {
    async store(req, res) {
        const {name, email, password} = req.body;
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { name: name },
                    { email: email },
                ]
            }
        })

        if(user) {
            return res.json({message: "User already exists"});
        }
        bcrypt.genSalt(10,  (err,salt) => {
            bcrypt.hash(password, salt,  async (err, hash) => {
                const userCreate = await User.create({
                    name,
                    email,
                    password: hash,
                    
                }, {raw: true})
                
            })
        })
        return res.json({message: "User created"});

        

        
        
        
        
    },
    async login(req,res) {
        const {nameOrEmail, password} = req.body;
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { name: nameOrEmail },
                    { email: nameOrEmail },
                ],
            },
            raw: true
        })
        const isLogued = bcrypt.compareSync(password, user.password);
        
        if(isLogued) {
            const {id} = user;
            const token = jwt.sign({id}, process.env.SECRET_KEY, {
                expiresIn: 3000
            });
            const userUP = User.update({
                token: token
            }, {
                where: {
                    id
                }
            })
            return res.status(200).send({auth: true, token: token});
            
        }
        else {
            return res.status(500).send('Login invalido');
        }
        
    },
    async profile(req,res) {
        const {token} = req.headers;
        const {id} = req.params;
        jwt.verify(token, process.env.SECRET_KEY, async (err, resp) => {
            if(err) {
                return res.status(500).send({message: "Token invalido"});
            }
            const user = await User.findOne({
                where: {
                    token: token,
                }
            })
            if(!user) {
                return res.status(500).send({message: "User dont exists"});
            }
            return res.json(user);
        })

       
    }
    
}