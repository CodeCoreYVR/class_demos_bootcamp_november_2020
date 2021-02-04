// Write chatr code here!
// const getReq = new XMLHttpRequest();

// getReq.addEventListener('load',
//   function() {
//     console.log(this.responseText)
//     document.querySelector('body').innerText = this.responseText;
//   }
// )

// getReq.open(
//   'GET',
//   'https://pokeapi.co/api/v2/pokemon/pikachu'
// )

// $.ajax({
//   method: 'GET',
//   url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
//   success: function(data) {
//     console.log(data)
//   }
// })

// fetch documentation https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// by default fetch will send a GET request to the provided URL
// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   // fetch returns a promise which resolves to a Response Object
//   .then(function(res) {
//     // The response obj represents a HTTP response
//     console.log(res);
//     return res.json(); // in order to get the actual data the response object holds, we need to parse it using res.text()
//   })
//   .then(function(data) {
//     // data is the information embedded in the response from the server
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log(err);
//   })



const loadMessages = () => {
  fetch('/messages')
  .then(function(res) { 
    return res.json();
  })
  .then(function(data) {
    console.log(data)
    const messagesContainer = document.querySelector('#messages');
    let messagesHTML = '';
    data.forEach(msg => {
      messagesHTML += `
        <li>
          ${msg.body}
          <i data-id=${msg.id} class='delete-link'>x</i>
        </li>
      `
    });
    messagesContainer.innerHTML = messagesHTML;
  });
}

const deleteMessage = (id) => {
  fetch(`/messages/${id}`, {
    method: 'DELETE'
  }).then(() => {
    console.log('deleted:', id)
    loadMessages()
  })
}

/*
<form>
  <input name='body' value='hello world'></input>
</form>
*/

// const fd = new FormData(); // creates a object that represents a form
// fd.set('body', 'hello world'); // we add an input to this form with the attribute name of body and the value of hello world

// fetch('/messages', {
//   method: 'POST',
//   body: fd
// });


document.addEventListener('DOMContentLoaded', () => {
  loadMessages();

  const form = document.querySelector('#new-message');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form submission event from refreshing page
    const f = event.currentTarget;
    const fd = new FormData(f);
    console.log(fd.get('body'))
    fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body: fd.get('body') })
    }).then(res => {
      loadMessages();
    })
  })

  const messagesContainer = document.querySelector('#messages');
  messagesContainer.addEventListener('click', function(event) {
    if (event.target.matches('i.delete-link')) {
      deleteMessage(event.target.dataset.id);
    }
  })
})