import UserController from '../controllers/UserController';
import auth from '../controllers/auth';
module.exports = (app) => {
    app.post('/user', UserController.store);
    app.post('/login', UserController.login);
    app.get('/user/:id', auth.verifyIfUserIsLogued , UserController.profile);
}