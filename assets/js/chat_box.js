var chat_btn = document.getElementById('chat-btn');
var close_btn = document.getElementById('close-btn');

chat_btn.addEventListener('click', () => {
    document.getElementById('user-chat-box').style.visibility = 'visible';
    chat_btn.style.visibility = 'hidden';
})

close_btn.addEventListener('click', () => {
    document.getElementById('user-chat-box').style.visibility = 'hidden';
    chat_btn.style.visibility = 'visible';
})