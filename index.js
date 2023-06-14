const chatlog = document.querySelector(".chatlog");
const input = document.querySelector(".chat-input input");
const button = document.querySelector(".chat-input button");

button.addEventListener("click", () => {
  const message = input.value.trim();

  if (message !== "") {
    const messageElem = document.createElement("div");
    messageElem.textContent = message;
    messageElem.classList.add("message", "sent");
    chatlog.appendChild(messageElem);
    input.value = "";
  }
});
