import User from '../database/models/User';
import { Op } from 'sequelize';
import bcrypt from 'bcryptjs';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import auth from './auth';

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
            return res.status(500).send({message: "User already exists"})
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

        if(!user) {
            return res.status(400).send({message: "Error"});
        }
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
                },
                raw: true
            })
            user.password = "";
            return res.status(200).send({auth: true, token: token, user: user});
            
        }
        else {
            return res.status(500).send('Login invalido');
        }
        
    },
    async profile(req,res) {
        const {id} = req.params;
        const user = await User.findOne({
            attributes: ['name', 'email'],
            where: {
                id
            },
            include: {
                association: 'pictures',
                attributes: ['path', 'name', 'description', 'owner_id']
            },
        })
        return res.json(user);
    }
    
}