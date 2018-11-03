const app = require("express")();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

const authRouter = require('./auth/auth.api');
app.use('/auth', authRouter);

const modelRouter = require('./model/model.api');
app.use('/model', modelRouter);

app.listen(8080, () => { console.log("Backend is listening on 8080") });