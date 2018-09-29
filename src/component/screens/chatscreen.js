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

    <div class="chat-header">
        <div>  ${window.user.email.split('@')[0]}!</div>
        <div class="signout" id="signout-btn">
            <button class="button2">
            <img class="img1" src="image/sign_out.png" alt="sign_out">
            </button>
        </div>
    </div>

   
    <div id="chat-messages" class="chat-messages">
        <div class="msg-bubble-left" id="msg-bubble-left"></div>
        <div class="msg-bubble-right" id="msg-bubble-right"></div>
    </div>

    <div class="chat-end">
        <div class="send">
        <input class="send1 "id="chat-input-msg" type="text" name="fname" placeholder="Type massage here....">
        </div>
        <div class="button3" id="chat-send-btn"><button id="button3"><img class="send_img" src="./image/send.png"></button></div>
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
          $('#chat-messages').html('');
        // console.log(msgs)
          for (let mid in msgs){
              let msg = msgs[mid];

              $('#chat-messages').append(Message(msg)
              );
            // scroll();
          }
      });
      function scroll(){
        let height = $('#chat-messages')[0].scrollHeight;
  
        $('#chat-messages').scrollTop(height);
  
    }
}
  
