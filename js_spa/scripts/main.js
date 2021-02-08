
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
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }
}

Session.create({
  email: 'js@winterfell.gov',
  password: 'supersecret'
}).then(console.log)

function renderQuestions(questions) {
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
}

function navigateTo(id) {
  document.querySelectorAll('.page').forEach(node => {
    node.classList.remove('active');
  })
  document.querySelector(`.page#${id}`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  Questions.index()
    .then(questions => {
      renderQuestions(questions)
    })
  
  const newQuestionForm = document.querySelector('#new-question-form');
  newQuestionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newQuestionParams = {
      title: formData.get('title'),
      body: formData.get('body')
    }
    Questions.create(newQuestionParams)
      .then(data => {
        if (data.id) {
          return Questions.index();
        }
        throw data;
      }).then(questions => {
        renderQuestions(questions)
      }).catch(err => {
        console.log(err);
        newQuestionForm.querySelectorAll('p').forEach(n => n.remove())
        for (const key in err.errors) {
          const input = newQuestionForm.querySelector(`#${key}`);
          const errorMessages = err.errors[key].join(',  ');
          const errorMessageNode = document.createElement('p');
          errorMessageNode.innerText = errorMessages;

          input.parentNode.prepend(errorMessageNode);
        }
      })
  })

  // navigation logic
  const navbar = document.querySelector('.navbar');
  navbar.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;
    console.log(target);
    const page = target.dataset.target;
    console.log(page);
    navigateTo(page)
  })
})