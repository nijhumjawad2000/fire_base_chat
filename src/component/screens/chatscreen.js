function mountChatScreen() {
    let db = firebase.database();
    let messages = db.ref('messages/');

    $('#root').html(ChatScreen());
    initChatScreenListeners(messages);
 }
 function ChatScreen() {
    let container = document.createElement('div');     //to create an HTML element
 
    container.id = 'Chat-screen';                    //to loading screen
    container.classList.add('Chat-screen');
    container.innerHTML = `
<div class="box1">
    <div class="chat-header">
   <div>  ${window.user.email.split('@')[0]}!</div>
    <div id="signout-btn">
    <button style="border-radius: 23px 15px 21px 24px;
    background-color: #0d0d5a;">
    <img src="image/sign_out.png" alt="sign_out"></button>
    </div>
    </div>
    <div id="chat-body" class="chat-body">
        
        <div class="left-bubble"></div>
        <div right="right-bubble"></div>
    </div>
    <div class="chat-end">
    <div  style="height: 100%" class="send">
    <input style="height: 8vh; color:white;
    width: 63vw; background: transparent;"id="chat-input-msg" type="text" name="fname" placeholder="Type massage here...."></div>
    <div id="chat-send-btn"><button >send</button></div>
    
    </div>
</div>
      `;
    return container;
 }
 function initChatScreenListeners(messages){
     let sendMessage = () =>{
    let date = new Date();
    let text = $("#chat-input-msg").val();

    messages.push({
        uid: user.uid,
        data:date,
        text:text,
        email:user.email,
        photoURL: user.photoURL
    });
    $("#chat-input-msg").val('');
    scroll();
     }

    
  $('#signout-btn').on('click',signOut)

  $('#chat-send-btn').on('click',sendMessage);

  $('#chat-input-msg').keypress(function (e){
      if(e.keyCode === 13){
          sendMessage();
      }
  }).keyup(function(){
      //we r going to same cool stuff here
  
      });

      messages.on('value', function (snapshot){
          let msgs = snapshot.val();
          $('#chat-body').html('');
        // console.log(msgs)
          for (let mid in msgs){
              let msg = msgs[mid];

              $('#chat-body').append(Message(msg)
              );
            // scroll();
          }
      });
      function scroll(){
        let height = $('#chat-body')[0].scrollHeight;
  
        $('#chat-body').scrollTop(height);
  
    }
}
  
