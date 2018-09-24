function Message(msg){
    let container =  document.createElement('div');
    let isMe = msg.uid === user.uid;
    container.style.textAlign = isMe ? 'left' : 'right';
    container.style.margin = '20px';

    container.innerHTML = `
    ${!isMe ? 
        `<div class="msg-name">
        ${msg.email.split('@')[0]}
        </div>`
         : '' }

         <div class="bubble ${isMe ? 'left-bubble' : 'right-bubble'}">
         <div>${msg.text}</div>
         <div class="msg-date-time">${moment(msg.date).format('MM/DD/YYYY hh:mm')}</div>
     </div>
    `
    return container;
}