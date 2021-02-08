
const BASE_URL = 'http://localhost:3000/api/v1';

const Session = {
  create(params) {
    // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
    return fetch(`${BASE_URL}/session`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', // allows cookies to be recieved and sent from this request
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  }
}

const Questions = {
  index() {
    return fetch(`${BASE_URL}/questions`)
      .then(res => {
        console.log(res)
        return res.json();
      })
  }
}

Session.create({
  email: 'js@winterfell.gov',
  password: 'supersecret'
}).then(console.log)

document.addEventListener('DOMContentLoaded', () => {
  Questions.index()
    .then(questions => {
      console.log(questions);
      const questionsContainer = document.querySelector('ul.question-list');
      questionsContainer.innerHTML = questions.map(q => {
        return `
          <li>
            <a class="question-link" href="#">
              <span>${q.id} - </span>
              ${q.title}
            </a>
          </li>
        `
      }).join('');
    })
})