function  mountSignUpScreen() {
    $('#root').html(SignUpScreen());
    initSignUpScreenListeners();
 }
 
 function SignUpScreen() {
    let container = document.createElement('div');     //to create an HTML element
 
    container.id = 'sign-up-screen';                    //to loading screen
    container.classList.add('sign-up-screen');
    container.innerHTML = `
    <div class="box1">
    <div class="back" >
        <button id="back" style="width: 7vw; height: 5vh;"><img src="../image/_ionicons_svg_md-arrow-round-back.svg" alt=""></ion-icon></button>
    </div>
    
    <div class="logo">
        <img style="max-width:40vw;" src="../image/cha.png" alt="">
    </div>
        <div class="in">
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email "required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="password" required>
        
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id=""password-confirmation required>
        
            <label>
              <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
            </label>     
        </div>
        
            <div class="button">
               
               <button id="sing-Up" class="sign_up">Sign Up</button>
             </div>
           
   
</div>
      `;
    return container;
 }

  function initSignUpScreenListeners() {
    $('#back').on('click', function() {  
      navigate('login-screen');
    });
  
    $('#sig-Up').on('click', function(){
      let email = $('#email').val();
      let password = $('#password').val();
      let passwordConfirmation = $('#password-confirmation').val();
  
      if (!isValidEmail(email)) {
        alert('Invalid e-mail');
      }
      else if (!isValidPassword(password)) {
        alert('Invalid password');
      }
      else if (password !== passwordConfirmation) {
        alert('Passwords do not match');
      }
      else {
        signUpWithEmailAndPassword(email, password);
      }
      
    });
  }