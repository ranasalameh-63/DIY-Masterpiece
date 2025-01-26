const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const messages = document.getElementById('messages');

    sendBtn.addEventListener('click', () => {
      const userMessage = userInput.value.trim();
      if (userMessage) {
        addMessage('user', userMessage);
        addMessage('assistant', 'Let me think... Here’s what I suggest: [AI response here]');
        userInput.value = '';
      }
    });

    function addMessage(sender, text) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', sender);
      messageDiv.textContent = text;
      messages.appendChild(messageDiv);
      messages.scrollTop = messages.scrollHeight;
    }