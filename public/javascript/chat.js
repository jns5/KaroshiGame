function init() {
    //when the page loads
    //create the scoket and connect to server on port 3000
    const chatbox = document.getElementById('chatbox');
    const txt = document.getElementById('chat-input');
    const chlist = document.getElementById('ugh');
    
    // // submit text message without reload/refresh the page
    // chatbox.submit(function(e) {
    //     e.preventDefault(); // prevents page reloading
    //     //send the value of the input to server through socket
    //     console.log(txt.val)
    //     socket.emit('submitted_message', txt.val());
    //     txt.val(''); //empty the input field for any new message to b typed
    //     return false;
    // });

    $('form').submit(function(e) {
        e.preventDefault(); // prevents page reloading
        //send the value of the input to server through socket
        socket.emit('submitted_message', $('#txt').val());
        $('#txt').val(''); //empty the input field for any new message to b typed
        return false;
    });

    // when receiving th 'on_line' event, append text with username
    socket.on('participant', function(username) {
        chlist.append($('<li>').html(username));
    });

    // when 'chat_message' event is received, append message received from server username
    socket.on('submitted_message', function(msg) {
        msg.preventDefault();
        chatbox.append($('<li>').html(msg));
        socket.emit('submitted-message', msg)
    });

}
