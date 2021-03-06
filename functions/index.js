const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.addAccount = functions.auth.user().onCreate(user => {
	const id = user.uid;
	return admin
		.firestore()
		.collection('users')
		.doc(id)
		.set({ username: 'default_username', userId: id });
});