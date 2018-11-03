const app = require("express")();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

const authRouter = require('./auth/auth.api');
app.use('/auth', authRouter);

const modelRouter = require('./model/model.api');
app.use('/model', modelRouter);

app.listen(8000, () => { console.log("Backend is listening on 127.0.0.1:80") });