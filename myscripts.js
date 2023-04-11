

function myFunction() {
  var x = document.getElementById("toggle");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// const userid = document.querySelector("#userid");
function formValidation() {
  var uid = document.registration.userid;
  var passid = document.registration.passid;
  // console.log(passid);

  var uname = document.registration.username;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var uzip = document.registration.zip;
  var uemail = document.registration.email;
  var umsex = document.registration.gender;
  // var lang = document.registration.english;
  var checkbox=document.getElementById("checkbox1");

  if (userid_validation(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      if (allLetter(uname)) {
        if (alphanumeric(uadd)) {
          if (countryselect(ucountry)) {
            if (allnumeric(uzip)) {
              if (ValidateEmail(uemail)) {
                if (validsex(umsex)) {
                  if(validenglish()){
                    return true;
                  }
                 
                

              
              }
            }
          }
        }
      }
    }
  }
  return false;
}

function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "User Id should not be empty / length be between " + mx + " to " + my
    );

    uid.focus();
    return false;
  }
  return true;
}
function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  // console.log(passid.value.length, mx, my);

  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    // console.log("empty");
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    passid.focus();
    return false;
  }

  return true;
}
function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert("Username must have alphabet characters only");
    uname.focus();
    return false;
  }
}
function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z,\s]*$/;

  //alert(uadd.value.trim().replace(/\s/g, ""));
  //if(uadd.value.trim().replace(/\s/g, "").match(letters))
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert("User address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
}
function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}
function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    alert("ZIP code must have numeric characters only");
    uzip.focus();
    return false;
  }
}
function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}
function validsex(umsex) {
  y = 0;

  if (umsex[0].checked) {
    y++;
  }
  if (umsex[1].checked) {
    y++;
  }

 

  if (y == 0) {
    alert("Select Male/Female");
    // umsex.focus();
    return false;
    
  }
else{
  
    //window.location.reload()
    return true;
}}
function validenglish(){
 


  

 

  if ((document.getElementById("checkbox1").checked)||(document.getElementById("checkbox2").checked)) {
    alert("Form Succesfully Submitted");
    //window.location.reload()
    return true;
   
    
  }

  else {
    
    alert("Please select your language ");
    return false;
  }}

}
