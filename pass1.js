var password = document.getElementById("password");
function genPassword() {
    let num = "0123456789";
    let small = "abcdefghijklmnopqrstuvwxyz";
    let special = "!@#$%^&*";
    let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    var passwordLength = document.getElementById("length").value;
    var specialLength = document.getElementById("spln").value;
    var capsLength = document.getElementById("cpln").value;
    var numLength = document.getElementById("dgln").value;
    var smallLength = document.getElementById("length").value - (document.getElementById("spln").value);
    smallLength -= (document.getElementById("cpln").value);
    smallLength -= (document.getElementById("dgln").value);
    for (var i = 0; i < specialLength; i++) {
        var randomNumber = Math.floor(Math.random() * special.length);
        password += special.substring(randomNumber, randomNumber + 1);
    }
    for (var i = 0; i < capsLength; i++) {
        var randomNumber = Math.floor(Math.random() * caps.length);
        password += caps.substring(randomNumber, randomNumber + 1);
    }
    for (var i = 0; i < numLength; i++) {
        var randomNumber = Math.floor(Math.random() * num.length);
        password += num.substring(randomNumber, randomNumber + 1);
    }
    for (var i = 0; i < smallLength; i++) {
        var randomNumber = Math.floor(Math.random() * small.length);
        password += small.substring(randomNumber, randomNumber + 1);
    }



    let str = password;
    // copying the contents of the
    // string to char array

    let arr = str.split(" ");

    // Shuffling our array using random_shuffle

    document.getElementById("password").value = arr;

}


function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}

function strengthPassword() {
  
    let yourpass = document.getElementById("yourpassword").value;

    let msg1 = "Warning!!! Your Password is weak";
    let msg3 = "Great Job!!! Your Password is strong";
    let msg2 = "Needs Improvement! Your Password is moderate";
    let msg4 = "Please Consult Our Password Generator";

    let count = 0;
    const obj = yourpass.split("");
    let sp = "!@#$%^&*";
    for(str of sp){
      let idx = obj.findIndex(s => s === str);
      if(idx >= 0){
        count++;
        obj.splice(idx, 1);
      } 
    }

    if (yourpass.length < 5) 
    {
        document.getElementById("strengthmsg").value = msg1;
        
    }
    else if(yourpass.length<8 && count==0){
        document.getElementById("strengthmsg").value = msg1;
        var element = document.getElementById("strengthmsg");
        element.style.color = "#FF0000";
    }
    else if(yourpass.length<8 && count!=0){
        document.getElementById("strengthmsg").value = msg2;
        
    }
    else if(yourpass.length>=8 && count!=0){
        document.getElementById("strengthmsg").value = msg3;
        var element2 = document.getElementById("strengthmsg");
        element2.style.color = "#008037";
    }
    else
    document.getElementById("strengthmsg").value = msg2;
   
}
