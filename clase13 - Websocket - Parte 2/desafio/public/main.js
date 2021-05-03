const socket = io.connect();

socket.on('products', data => {
    showProducts(data);
});


let showProducts = data => {
    let products = data.map((elem, id) => {
        return (
            `<tr>
              <td>${elem.title}</td>
              <td>${elem.price}</td>
              <td><img height="100" width="100" src="${elem.thumbnail}" class="img-thumbnail"></td>
              <td><a id="btn-delete" class=" text-decoration-none" href="/api/productos/${elem.id}"><button class="btn btn-dark border border-white shadow rounded">EDITAR</button></a></td>
              <td><a id="btn-delete" class=" text-decoration-none" onClick='return confirm("¿Seguro querés borrar el producto ${elem.title}?")' href="/api/productos/delete/${elem.id}"><button class="btn btn-dark border border-white shadow rounded">ELIMINAR</button></a></td>
            </tr>`);
    });
    document.getElementById('tableProd').innerHTML = products;
};

socket.on("messages", function (data) {
    console.log(data);
});

let render = data => {
    const html = data
        .map(function (elem, index) {
            return `<div>
                      <strong style="color:blue">${elem.author}</strong> <span style="color:brown">${elem.date}</span> :
                      <em style="color:green">${elem.text}</em>
                  </div>`;
        })
        .join(" ");
    document.getElementById("messages").innerHTML = html;
};
socket.on("messages", function (data) {
    render(data);
});
const date = new Date();
const newDate = `[${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`
let addMessage = e => {
    const mensaje = {
        author: document.getElementById("userName").value,
        text: document.getElementById("texto").value,
        date: newDate
    };
    socket.emit("new-message", mensaje);
    return false;
};