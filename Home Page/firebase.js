// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// import {  getFirestore,
//   // addDoc,
//   // collection,
//   doc,
//   setDoc, } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";

//   import {
//       getAuth,
//       createUserWithEmailAndPassword,
//       onAuthStateChanged,
//     } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js"; // Updated import
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword, 
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js"; // Updated import

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzGdgAhcIRafm-n7Wq3jo_FIndp1fChvU",
  authDomain: "olx-data-119f6.firebaseapp.com",
  projectId: "olx-data-119f6",
  storageBucket: "olx-data-119f6.appspot.com",
  messagingSenderId: "555869389624",
  appId: "1:555869389624:web:c8a0264b8e56457ad877cd",
  measurementId: "G-6FF762LYWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// console.log(app);

const signUp = async (userDetails) => {
  const { fullName, password, age, phoneNumber, email } = userDetails;
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user", user.user.uid);
    addUserToDb(userDetails, user.user.uid);
    console.log("user", user);
    Swal.fire("Good job!", "You have registered successfully!", "Hurry");
  } catch (error) {
    console.log("error arha he", error.code);
    // console.log(error.message)
  }
};
debugger
const addUserToDb = async (userDetails, userId) => {
  const { fullName, age, phoneNumber, email } = userDetails;

  // const res = await addDoc(collection(db,"user"), userDetails)
  // const res = await setDoc(collection(db,"user"), userDetails)
  // Add a new document in collection "cities"
  const store = await setDoc(doc(db, "users", userId), {
    fullName,
    age,
    phoneNumber,
    email,
    userId,
  });
}
// ---------Sign in User---------------
const signin = async (userDetails)=>{
  const { fullName, password1, age, phoneNumber, email1 } = userDetails;
  try{
 const user = await signInWithEmailAndPassword(auth, email1, password1)
    console.log("ye sign in user hai", user)
  }catch(error){
    console.log("error araha hai kxh" , error.code)
  }
}


// ---------------check user-----------------

// const checkUser =  ()=>{
//  onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("user", user)
      
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       return user
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   })
// }


const checkUser = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user", user);
      console.log("han chal raha hai")
      callback(user); // Pass the user object to the callback
    } else {
      callback(null); // User is signed out, pass null to the callback
    }
  });
};
console.log(db);

export { signUp , checkUser , signin };
