import {Expense} from '../models/expense';

const createExpenses = async (req, res) => {
	console.log("create expense controller here!");
	res.json("working");
	console.log(req.data);
	// const userid = 1;
	// const title = req.body.newExpenseData[0];
	// const category = req.body.newExpenseData[1];
	// const amount = req.body.newExpenseData[2];
	// const date = req.body.newExpenseData[3];
	// var receiptImage;

	// const newExpense = await Expense.create({ userid, title })

	// if (
	// 	req.body.newExpenseData[4] &&
	// 	req.body.newExpenseData[4] !== "" &&
	// 	req.body.newExpenseData[4] !== null
	// ) {
	// 	receiptImage = req.body.newExpenseData[4];
	// } else {
	// 	receiptImage = "";
	// }
	// const description = req.body.newExpenseData[5];
	// const queryNewExpense =
	// 	"INSERT INTO Expense (userId, title, category, amount, dateCreated, receipt, expenseDescription) Values (? , ? , ? , ? , ? , ?, ? )";
	// console.log(userid, title, category, amount, date, receiptImage, description);

	// mysqlConnection.query(
	// 	queryNewExpense,
	// 	[userid, title, amount, category, date, receiptImage, description],
	// 	(error, result) => {
	// 		if (error) {
	// 			console.log(error);
	// 			res.status(400);
	// 		}
	// 		if (result) {
	// 			console.log(result);
	// 			res.json("we good we good");
	// 		}
	// 	}
	// );
};

const getAllExpenses = async (req, res) => {

	const expenses = await Expense.findAll();
	res.json({expenses})
	// const queryGetExpense = "SELECT * FROM Expense";
	// mysqlConnection.query(queryGetExpense, (error, result, fields) => {
	// 	if (error) {
	// 		console.log(`the error message from query is ${error}`);
	// 	}
	// 	if (result.length > 0) {
	// 		console.log(result);
	// 		const expenses = result.map((row) => {
	// 			return [
	// 				row.title,
	// 				row.category,
	// 				row.amount,
	// 				row.date,
	// 				row.receipt,
	// 				row.description,
	// 				row.expenseId,
	// 			];
	// 		});
	// 		res.json(expenses);
	// 	}
	// });
	res.json("still working");
};

const deleteExpense = async (req, res) => {
	// const queryDeleteExpense = "DELETE FROM Expense WHERE ? = expenseId";
	// console.log("this is the body of req to be deleted", req);
	// const id = req.body.id;
	// console.log(id);
	// 	mysqlConnection.query(queryDeleteExpense, [id], (err, results) => {
	// 		if (err) {
	// 			console.log(err);
	// 			res.json("error from server:", err);
	// 		}
	// 		if (results) {
	// 			console.log(results);
	// 			res.json("couldve worked");
	// 		}
	// 	});
	res.json("working");
};

// export { createExpenses, getAllExpenses, deleteExpense };
module.exports = { createExpenses, getAllExpenses, deleteExpense };
