import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA4aL3oU13SkaW_1nKYjIa6VcvugkeJNtw",
    authDomain: "nba-done-81bc7.firebaseapp.com",
    databaseURL: "https://nba-done-81bc7.firebaseio.com",
    projectId: "nba-done-81bc7",
    storageBucket: "nba-done-81bc7.appspot.com",
    messagingSenderId: "161011917327",
    appId: "1:161011917327:web:5b80561edf60adaa10f97a",
    measurementId: "G-FK700XYFMD"
  };

firebase.initializeApp(config);  

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}