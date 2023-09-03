import { signUp,checkUser,signin } from "./firebase.js";
//   addEventListener('click',login)
//   function login(){
  // document.getElementsByClassName("login-sell-section")[0].style.display='none';
//   document.getElementsByClassName("login-detail")[0].style.display="flex";
//   }

// ----------------------------firebase-------------------

// import {checkUser} from "./firebase.js"

// checkUser();
// debugger
window.openPopup = function() {
  console.log("running");
  document.getElementById("popupOverlay").classList.toggle("hidden") ;
}

const IsAuthentigated = (user) => {
  console.log("running");
  console.log("user araha hai ab index mai ", user)
  // debugger
  if (user) {
    document.getElementsByClassName("login-user")[0].innerHTML = `
    <div class="login-detail">
    <img src="images/chat.png" width="35px">
   <img src="images/avatar.png" alt="logo" width="40px">
   <Select style="border: 0;">
       <OPtion value=""></OPtion>
       <OPtion value="name">Name</OPtion>
       <option value="Log Out"> Log Out</option>
   </Select>
   <h4 id="sell-button"><span style="font-size: 20px;">+</span>Sell</h4> 
</div>
      `;
  } else {
    document.getElementsByClassName("login-sell-section")[0].innerHTML = `
    <h4 onclick="openPopup()">Login</h4>
    <h4 id="sell-button"><span style="font-size: 20px;">+</span>Sell</h4>`;
  }
};

// Call checkUser with the IsAuthentigated function as a callback

checkUser((user) => {
  IsAuthentigated(user);
});





// const IsAuthentigated =  ()=> {
//   console.log("running")
//   const user = checkUser();
//   console.log("user araha hai kya,", user)
//   if(user){
//      document.getElementsByClassName("login-user")[0].innerHTML = `<div class="login-detail">
//      <img src="images/chat.png" width="35px">
//      <img src="images/avatar.png" alt="logo" width="40px">
//      <Select style="border: 0;">
//      <OPtion value=""></OPtion>
//      <OPtion value="name">Name</OPtion>
//      <option value="Log Out"> Log Out</option>
//      </Select>
//      <h4 id="sell-button"><span style="font-size: 20px;">+</span>Sell</h4>
//  </div>` ;
// }else{
  // document.getElementsByClassName("login-sell-section")[0].innerHTML = `<h4 onclick="openPopup()">Login</h4>
  // <h4 id="sell-button"><span style="font-size: 20px;">+</span>Sell</h4>` ;
// }
// }
// IsAuthentigated()




window.userSignup = async () => {
  // debugger
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const phoneNumber = document.getElementById("phnumber");
  const age = document.getElementById("age");
  const fullName = document.getElementById("name");
  console.log(fullName);
  const userDetails = {
    fullName: fullName.value,
    password: password.value,
    phoneNumber: phoneNumber.value,
    age: age.value,
    email: email.value,
  };
  const user = await signUp(userDetails);
  console.log("user", user);
  window.location.reload();
};

window.signin = async () =>{
  const email1 = document.getElementById("email1");
  const password1 = document.getElementById("password1");
  const userDetails = {
    password: password1.value,
    email: email1.value,
  };
  const user = await signUp(userDetails);
}


// document.getElementById("submit-form").addEventListener('click',changeloginSection);

// function changeloginSection(){
//    document.getElementsByClassName(".login-sell-section")[0].style.display = 'none';
//    document.getElementsByClassName(".login-detail")[0].style.display = 'flex';
// }


