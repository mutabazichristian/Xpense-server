require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter.js');
const signupRouter = require('./routes/signupRouter.js');
const expensesRouter = require('./routes/signupRouter.js');
const sequelizeConnection = require('./config/DB/database.js');
const useradminRouter = require('./routes/useradminRouter.js');
const systemadminRouter = require('./routes/systemadminRouter.js')
// import userRouter from "./routes/userRouter.js";

const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
	origin: 'https://elegant-lokum-4a98c1.netlify.app'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/login', userRouter);
app.use('/signup', signupRouter);
app.use('/expenses', expensesRouter);
app.use('/useradmin', useradminRouter);
app.use('/systemadmin', systemadminRouter);



sequelizeConnection.authenticate()
	.then(() => {
		console.log('Database connection has been established succesfully');
		return sequelizeConnection.sync();
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}.`);
		});

	})
	.catch((error) => {
		console.log('unable to connnect to db', error);
	})
