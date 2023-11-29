const jwt = require('jsonwebtoken');
const { User, UserAdmin, SystemAdmin } = require('../models/index.js');

//secret key to encode jwt token for authentication
const secretKey = process.env.JWT_SECRET_KEY;
//bunch

//function to create JWT token for existing user
const generateToken = (id, email) => {

	const payload = {
		id,
		email
		// userId: isUser.dataValues.userId,
		// email: isUser.dataValues.email
	};
	const token = jwt.sign(payload, secretKey, { expiresIn: "3h" });
	console.log("Generated Token:", token);
	return token
}

//exported function to authenticate
const login = async (email, password) => {
	try {
		var userType;
		console.log("Attempting login...");
		console.log('Credentials:', { email, password });


		//CHECK IF IT IS A USER??
		const isUser = await User.findOne({
			where: { email }
		});

		console.log('is user?', !!isUser);

		if (!!isUser && !!isUser.dataValues) {

			var isPasswordCorrect = await User.findOne({
				where: { password }
			})
			console.log('is password correct?', isPasswordCorrect);

			if (isPasswordCorrect) {
				console.log('meh, just a user');
				userType = 'user';
				const token = generateToken(isUser.dataValues.userId, isUser.dataValues.email);

				return {
					success: true,
					data: {
						status: "success login",
						userEmail: isUser.dataValues.email,
						token,
						userType,
						success: true
					}
				};
			} if (isPasswordCorrect == null) {
				return {
					success: false,
					data: {
						status: 'incorrect password',
						success: false
					}
				}
			}

		}


		//CHECK IF IT IS USER ADMIN
		const isUserAdmin = await UserAdmin.findOne({
			where: { email }
		})
		if (!!isUserAdmin && !!isUserAdmin.dataValues) {
			var isPasswordCorrect = await UserAdmin.findOne({
				where: { adminPassword: password }
			})

			if (isPasswordCorrect) {
				console.log('it is a user admin');
				userType = 'userAdmin';
				const token = generateToken(isUserAdmin.dataValues.id, isUserAdmin.dataValues.email);
				return {
					success: true,
					data: {
						status: "success login",
						userEmail: isUserAdmin.dataValues.email,
						token,
						userType,
						success: true
					}
				}
			} if (isPasswordCorrect == null) {
				return {
					success: false,
					data: {
						status: 'incorrect password',
						success: false
					}
				}
			}
		}


		//CHECK IF IT IS A SYSTEM ADMIN
		const isSystemAdmin = await SystemAdmin.findOne({
			where: { email }
		})
		if (!!isSystemAdmin && !!isSystemAdmin.dataValues) {
			var isPasswordCorrect = await SystemAdmin.findOne({
				where: { adminPassword: password }
			})
			if (isPasswordCorrect) {
				console.log('it is a system admin');
				userType = 'systemadmin';
				const token = generateToken(isSystemAdmin.dataValues.id, isSystemAdmin.dataValues.email);
				return {
					success: true,
					data: {
						status: 'success login',
						userEmail: isSystemAdmin.dataValues.email,
						token,
						userType,
						success: true
					}
				}
			} if (isPasswordCorrect == null) {
				return {
					success: false,
					data: {
						status: 'incorrect password',
						success: false
					}
				}
			}
		}
		else {
			return {
				success: false,
				data: {
					message: 'Not account associated with this email',
					success: false
				}
			}
		}

	} catch (error) {
		console.log('Error while trying to find out what type of user', error);
		return {
			success: false,
			data: {
				message: 'Internal Server Error',
				success: false
			}
		};
	}
};

module.exports = { login };