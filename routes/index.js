const homeRouter = require('./home.routes');
const authRouter = require('./auth/auth.routes');
const userRouter = require('./user/user.routes');
const postRouter = require('./post/post.routes');
const conversationsRouter = require('./conversations.routes');
const messagesRouter = require('./messages.routes');



const routers = (app) => {
    app.use('/api/v1/', homeRouter);
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/post', postRouter);
    app.use('/api/v1/user', userRouter);
    app.use('/api/v1/conversations', conversationsRouter);
    app.use('/api/v1/messages', messagesRouter);
}

module.exports = routers;