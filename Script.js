// Form Submit Logic
document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formResponse').innerText = "Thank you. Your request has been submitted. We will contact you soon.";
    document.getElementById('supportForm').reset();
});

// Ask Mira Chatbot Logic
function sendMessage() {
    let input = document.getElementById('userInput').value.toLowerCase();
    let chatbox = document.getElementById('chatbox');
    
    if (input.trim() === "") return;

    chatbox.innerHTML += `<div class="user-msg">You: ${input}</div>`;

    let reply = "";
    if (input.includes("fever") || input.includes("tap")) {
        reply = "For fever, please consult a doctor immediately and stay hydrated. This is not a medical diagnosis.";
    } else if (input.includes("appointment")) {
        reply = "To book an appointment, please fill the support form above. Our team will call you.";
    } else if (input.includes("volunteer")) {
        reply = "Thank you for your interest in volunteering. Please mention 'Volunteer' in the form message.";
    } else {
        reply = "I am Ask Mira. I can help with basic queries like 'fever', 'appointment', or 'volunteer'.";
    }

    chatbox.innerHTML += `<div class="bot-msg">Mira: ${reply}</div>`;
    document.getElementById('userInput').value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}
