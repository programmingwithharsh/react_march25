import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'font-awesome/css/font-awesome.css';

const username = "Ayush"; // string
const interests = ["Playing video games", "Cricket", "Riding Bike", "Travelling"]; // array
const birth = { // object
    year: 2000,
    place: "Madhya Pradesh"
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main mobile="iPhone" user={username} hobbies={interests} birthDetail={birth} />); // render method
/*
Props mobile, user, hobbies and birthDetail
*/