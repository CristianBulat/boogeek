const chatWindow = document.getElementById('chat')
let messages = []

function initChat() {
    let chatHidden = localStorage.getItem('chatHidden')
    if(!chatHidden){
        openChat()
    }
}

function openChat() {
  chatWindow.classList.remove('hidden')
  chatHidden = false
  localStorage.removeItem('chatHidden')
}

function closeChat() {
    chatWindow.classList.add('hidden')
    localStorage.setItem('chatHidden', true)
}


function sendMessage() {
  const boxvalue = document.getElementsByClassName('text-input');
  if(boxvalue[0].value.length > 0){
    messages.push(boxvalue[0].value);
    console.log(messages);
    boxvalue[0].value = '';
  }
}