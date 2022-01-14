const firebase = require('firebase/compat/app')
require('firebase/compat/storage')

firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
});

const storageRef = firebase.app().storage().ref();

module.exports = storageRef