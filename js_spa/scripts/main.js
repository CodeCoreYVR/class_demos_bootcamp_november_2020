
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
  },
  show(id) {
    return fetch(`${BASE_URL}/questions/${id}`)
      .then(res => res.json())
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
        <a class="question-link" href="#" data-id="${q.id}">
          <span>${q.id} - </span>
          ${q.title}
        </a>
      </li>
    `
  }).join('');
}

function renderQustionShow(q) {
  const showPage = document.querySelector('#question-show');
  showPage.innerHTML = `
    <h1>${q.title}</h1>
    <p>${q.body}</p>
    <small>${q.author ? q.author.first_name : ''}</small>
    <small>${q.like_count}</small>
  `
  navigateTo('question-show')
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

  // Show page logic
  const questionsContainer = document.querySelector('ul.question-list');
  questionsContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.closest('a');
    if (target) {
      const id = target.dataset.id;
      console.log(id);
      Questions.show(id)
        .then(q => {
          renderQustionShow(q);
        })
    }
  })
})

// {id: 29, title: "We need to parse the wireless thx array!", body: "Chuck Norris doesn't believe in floating point num…cause they can't be typed on his binary keyboard.", created_at: "2019-05-06T00:00:00.000Z", updated_at: "2019-05-06T00:00:00.000Z", …}
// answers: (4) [{…}, {…}, {…}, {…}]
// author: {id: 9, first_name: "Chi", last_name: "Jacobi", full_name: "Chi Jacobi"}
// body: "Chuck Norris doesn't believe in floating point numbers because they can't be typed on his binary keyboard."
// created_at: "2019-05-06T00:00:00.000Z"
// id: 29
// like_count: 5
// randomstuff: "You can add anything to your json response, This is an example"
// title: "We need to parse the wireless thx array!"
// updated_at: "2019-05-06T00:00:00.000Z"
// view_count: 22652