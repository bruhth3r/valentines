function showYesMessage() {
    document.getElementById("messageText").innerText = 
        "YAYYY IM SO HAPPY YOU DESERVE TO FEEL AMAZINGG also this is lit rally us";
    document.getElementById("messageGif").src = 
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb253NHV4MzAyOWxzOHU2N3l5cGhhZmN1a2RjeDBrNzZjZ21oYWRyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4rONkkYKUUDe0/giphy.gif";
    
    // Hide buttons and show message
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("messageContainer").style.display = "block";
}

function showNoMessage() {
    document.getElementById("messageText").innerText = 
        "sorry you don't feel well:( You deserve to feel amazing because you're the most amazing person ever. Ill always be here for you. ill even if you make mistakes. Even when you don't feel your best and when youre overthinking. You never annoy me. Thank you for always being there for me. Stay safe <3";
    document.getElementById("messageGif").src = 
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmQxZTg3aHE5N3UwejlncjZ5c3luenQ0ZGc2dWZ0a25jdThndzBzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKfpB6WZeKC1DiGrj8/giphy.gif";
    
    // Hide buttons and show message
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("messageContainer").style.display = "block";
}
