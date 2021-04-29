let socket = io.connect();
socket.on("messages", function(data) {
  console.log(data);
});

let render = data => {
  const html = data
    .map(function(elem, index) {
      return `<div>
                    <strong>${elem.author}</strong>:
                    <em>${elem.text}</em>
                </div>`;
    })
    .join(" ");
  document.getElementById("messages").innerHTML = html;
};
socket.on("messages", function(data) {
  render(data);
});

let addMessage = e => {
  const mensaje = {
    author: document.getElementById("userName").value,
    text: document.getElementById("texto").value
  };
  socket.emit("new-message", mensaje);
  return false;
};
