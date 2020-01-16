import PictureModel from '../database/models/Picture';
import UserModel from '../database/models/User';
module.exports = {
    async store(req,res) {
        
        const { filename } = req.file;

        const {owner_id, name, description} = req.body;
        const user = await UserModel.findByPk(owner_id);

        if(!user) {
            return res.status(500).send("User does not exists");
        }

        const picture = await PictureModel.create({
            owner_id,
            name,
            description: description,
            path: filename
        })

        return res.json(picture);

    },
    async index(req,res) {
        const {token} = req.params;
        if(!token) {
            const pictures = await PictureModel.findAll();
            return res.json({pictures: pictures});
        }
        const pictures = await PictureModel.findAll();
        const user = await UserModel.findOne({
            where: {
                token: token
            }
        })
        return res.json({pictures: pictures,user: user});
    }, 
}