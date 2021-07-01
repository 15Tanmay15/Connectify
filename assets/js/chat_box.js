var icon = document.getElementById('icon');
var close_btn = document.getElementById('close-btn');

icon.addEventListener('click', () => {
    document.getElementById('user-chat-box').style.visibility = 'visible';
    icon.style.visibility = 'hidden';
})

close_btn.addEventListener('click', () => {
    document.getElementById('user-chat-box').style.visibility = 'hidden';
    icon.style.visibility = 'visible';
})