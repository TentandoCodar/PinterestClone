import jwt from 'jsonwebtoken';
import 'dotenv/config';
import User from '../database/models/User';
module.exports = {
    async verifyIfUserIsLogued(req,res,next) {
        const {id} = req.params;
        const {token} = req.headers;
        jwt.verify(token, process.env.SECRET_KEY, async (err, resp) => {
            if(err) {

                return res.status(500).send({message: "Token invalido"});
            }
            const user = await User.findOne({
                where: {
                    token: token,
                    id: id
                }
            })
            if(!user) {
                return res.status(500).send({message: "User does not exists"});
            }
            next();

        })
        
    }
}