// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARUk2wxPIz5R16lDD1ghPXQbmxPqhW6Qk",
  authDomain: "techflowltd.firebaseapp.com",
  projectId: "techflowltd",
  storageBucket: "techflowltd.appspot.com",
  messagingSenderId: "843451837347",
  appId: "1:843451837347:web:ff20ecf77e7d0fa927c816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  var name = getInputVal('email');
  var company = getInputVal('fname');
  var email = getInputVal('lname');
  var phone = getInputVal('');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase0
function saveMessage(fname, lname, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email: email,
    message: message
  });
}
