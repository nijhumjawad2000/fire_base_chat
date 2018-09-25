// function Message(msg, showUsername){
//     let container =  document.createElement('div');
//     let isMe = msg.uid === user.uid;
//     container.style.textAlign = isMe ? 'right' : 'left';
//     container.style.margin = '20px';

//     container.innerHTML = `
//     ${showUsername ? 
//         `<div class="msg-name">
//         ${msg.email.split('@')[0]}
//         </div>`
//          : '' }

//          <div class="bubble ${isMe ? 'left-bubble' : 'right-bubble'}">
//          <div>${msg.text}</div>
//          <div class="msg-date-time">${moment(msg.date).format('MM/DD/YYYY hh:mm')}</div>
//      </div>
//     `
//     return container;
// }


function Message(msg, showUsername) {
    let container = document.createElement('div');
    let isMe = msg.email === user.email;
   
    container.style.textAlign = isMe ? 'right' : 'left';
    container.style.margin = '20px';
   
    container.innerHTML = `
      ${showUsername ?
        `<div class="msg-name">
          ${msg.email.split('@')[0]}
        </div>`
        : ''}
   
      <div style="display: flex; justify-content: ${isMe ? 'flex-end' : 'flex-start'}">
        ${
          !isMe ?
      `<img style="border-radius: 50%; background-color: #000;" src="${msg.photoURL ? msg.photoURL : './images/logo.png'}" width="50px" height="50px" />`
          : ''
        }
   
        <div class="bubble ${isMe ? 'right-bubble' : 'left-bubble'}">
          <div>${msg.text}</div>
   
          <div class="msg-date-time">${moment(msg.date).format('MM/DD/YYYY hh:mm')}</div>
        </div>
   
   
      </div>
   
    `
    return container;
   }