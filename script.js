// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
      output = "Hello! Welcome to Blitz Learning Technologies. How can I assist you today?";
  } else if (input.includes("how are you")) {
      output = "I'm an AI chatbot, so I don't have feelings, but I'm here to help you!";
  } else if (input.includes("what is your name")) {
      output = "I'm the Blitz Learning Technologies chatbot, here to provide you with information about our services.";
  } else if (input.includes("what can you do")) {
      output = "I can provide information about Blitz Learning Technologies' services, such as custom eLearning, content development, video production, learning consulting, and our VR/AR lab.";
  } else if (input.includes("tell me a joke")) {
      output = "Why don't scientists trust atoms? Because they make up everything.";
  } else if (input.includes("services") || input.includes("what services do you offer")) {
      output = "At Blitz Learning Technologies, we offer a range of services including:\n\n" +
               "- **Custom eLearning**: Tailored learning modules designed to meet specific objectives, ensuring engagement and knowledge retention.\n" +
               "- **Content Development**: Creation and localization of content to advance skills and improve performance.\n" +
               "- **Video Production**: Transforming concepts into dynamic visual content to enhance learning experiences.\n" +
               "- **Learning Consulting**: Aligning education strategies with business goals to create a seamless link between learning and organizational success.\n" +
               "- **VR/AR Lab**: Developing immersive training experiences using Virtual and Augmented Reality technologies.";
  } else if (input.includes("contact") || input.includes("how can I reach you")) {
      output = "You can contact Blitz Learning Technologies at:\n\n" +
               "- **Address**: 101/D-30, 1st Floor, Siddharth Complex, Laxmi Nagar, New Delhi-110092, India\n" +
               "- **Email**: contactus@blitzlearning.in\n" +
               "- **Phone**: +91-6123117729 or +91-6123123730";
  } else {
      output = "I'm sorry, I didn't understand that. Could you please rephrase your question or ask about our services and contact information?";
  }

  return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message", "user");

  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");

  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;

  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message", "bot");

  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");

  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;

  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function () {
          displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
      sendMessage();
  }
});

// Show welcome message on page load
window.onload = function () {
  setTimeout(function () {
      displayBotMessage("Welcome to Blitz Learning");
  }, 500);
};