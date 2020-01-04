import UserController from '../controllers/UserController';
module.exports = (app) => {
    app.post('/user', UserController.store);
    app.post('/login', UserController.login);
    app.get('/user/:id', UserController.profile);
}