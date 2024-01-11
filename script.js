const createAccount = document.querySelector(".createaccount");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const passwordError = document.querySelector(".passworderrormessage");
console.log([password.value,confirmPassword.value]);
createAccount.addEventListener('click', (e) => {
    if (password.value !== confirmPassword.value)
    {
        //show error message
        passwordError.innerText = "Passwords do not match";
        e.preventDefault();
    }
})
