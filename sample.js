const passwordbox = document.getElementById("password");
const length = 12;
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%*";

const allchars = UPPERCASE + lowercase + number + symbols;
function createpassword(){
    let password = "";
    password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordbox.value = password;
}