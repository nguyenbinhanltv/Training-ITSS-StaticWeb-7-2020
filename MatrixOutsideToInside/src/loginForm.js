//Login
const login = document.getElementById('login');
const loginSignIn = document.getElementById('login-sign-in');
const loginSignUp = document.getElementById('login-sign-up');

//2 button sign in, sign up
const btnSignUp = document.getElementById('btn-sign-up');
const btnSignIn = document.getElementById('btn-sign-in');

//Input login information
const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');

//Input Login tab sign up information
const inputFullname = document.getElementById('input-fullname');

//button sign up form tab sign up
const btnSignUp2 = document.getElementById('btn-sign-up2');

//Sign up item
const SignUpItem = `<div class="login-sign-up" id="login-sign-up">
                <form action="">
                    <h1>
                       <div style="width: 40%; display: inline-block; text-align: left;"> <label  for="fullname">Full Name:</label></div>
                        <input type="text" name="fullname" class="input-information" id="input-fullname" maxlength="32" placeholder="Enter your fullname" required>
                    </h1>
                    <h1>
                        <div style="width: 40%; display: inline-block; text-align: left;"><label for="email">Email:</label></div>
                        <input type="email" name="email" class="input-information" maxlength="32" placeholder="Enter your email" required>
                    </h1>
                    <h1>
                        <div style="width: 40%; display: inline-block; text-align: left;"><label for="conform-email">ConformEmail:</label> </div>
                        <input type="email" name="conform-email" class="input-information" maxlength="32" placeholder="Enter your email" required>
                    </h1>
                    <h1>
                        <div style="width: 40%; display: inline-block; text-align: left;"><label for="phone">Phone:</label> </div>
                        <input type="text" name="phone" class="input-information" maxlength="32" placeholder="Enter your phone" required>
                    </h1>
                    <h1>
                        <div style="width: 40%; display: inline-block; text-align: left;"><label for="password">Password:</label></div>
                        <input type="password" name="password" class="input-information" maxlength="32" placeholder="Enter your password" required>
                    </h1>
                    <button type="submit" id="btn-sign-up2">Sign Up</button>
                </form>
            </div>`;

//Sign in success
btnSignIn.onclick = () => {
    if(inputUsername.value && inputPassword.value) {
        const SignInItem = `<h1>Login successful, Welcome ${inputUsername.value}!</h1>`;
        login.removeChild(loginSignIn);
        login.innerHTML = SignInItem;
    }
}

btnSignUp.onclick = () => {
    login.removeChild(loginSignIn);
    login.innerHTML = SignUpItem;
}

// btnSignUp2.onclick = () => {
//     if(inputFullname.value) {
//         const SignUpSuccess = `<h1>Welcome ${inputFullname.value}, you're sign up seccessful!</h1>`;
//         login.removeChild(loginSignUp);
//         login.innerHTML = SignUpSuccess;
//     }
// }

