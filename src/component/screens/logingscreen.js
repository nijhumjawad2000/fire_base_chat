function mountLoginScreen() {
    $('#root').html(LoginScreen());
    initLoginScreenListeners();
 }
 
 function LoginScreen() {
    let container = document.createElement('div');     //to create an HTML element
 
    container.id = 'login-screen';                    //to loading screen
    container.classList.add('Login-screen');
    container.innerHTML = `
    <div class="box1">
    
    <div class="logo">
        <img style="max-width:59vw;" src="./image/cha.png" alt="">
    </div>
        <div class="in">
        <label for="uname"><b>Username</b></label>   
        <input type="text" placeholder="Enter Username" name="uname" required>
                <br>
        <label for="uname"><b>Password</b></label>
        <input type="text" placeholder="Enter Password" name="passw" required>        
        </div>
        <div class="forgot">
        <a href="#" class="forgot">forgot password?</a> 
       </div>
            <div class="source">
            <div class="facebook" id="facebook-login-button">
                <img src="https://sguru.org/wp-content/uploads/2018/02/Facebook-PNG-Image-49351.png" alt="">
            </div>   
            <div class="google" id="google-login-btn"> 
                <img 
                src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" alt="">
            </div>     
            </div>
            <div class="button">
                <button id="login-btn" class="sign_in">Sign In</button>
               <button id="sign-up" class="sign_up">Sign Up</button>
             </div>
           
   
</div>
      `;
    return container;
 }
 function initLoginScreenListeners() {
    $('#google-login-btn').on('click', function(){
      createPersistantSession(logInWithGoogle);
    });

    $('#facebook-login-button').on('click', function(){
        createPersistantSession(loginWithFacebook);
      });
  
    $('#login-btn').on('click', function() {
      createPersistantSession(loginWithEmailAndPassword);
    });
  
    $('#sign-up').on('click', function() {
      navigate('sign-up-screen');
    });
  }


//  function initLoginScreenListeners(){
//   $('#google-login-btn').on('click',function(){
//       createPersistantSession(logInWithGoogle);
//   });
//       $('#sign-up').on('click',function(){
//         console.log('going to sign up screen');
//           navigate('sign-up-screen');

        
//  })

 
// }