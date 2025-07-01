const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false }
    ]
  },
  {
    question: "What language is used for styling?",
    answers: [
      { text: "HTML", correct: false },
      { text: "Java", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false }
    ]
  },
  {
    question: "Which language is used for web apps?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "PHP", correct: false },
      { text: "C++", correct: false },
      { text: "SQL", correct: false }
    ]
  }
];

let currentQuestion = 0;
const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');

function showQuestion() {
  nextBtn.style.display = 'none';
  const current = questions[currentQuestion];
  questionContainer.innerHTML = `<h3>${current.question}</h3>`;

  current.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.innerText = answer.text;
    btn.classList.add('answer-btn');
    btn.onclick = () => selectAnswer(btn, answer.correct);
    questionContainer.appendChild(btn);
  });
}

function selectAnswer(selectedBtn, isCorrect) {
  const allBtns = document.querySelectorAll('.answer-btn');
  allBtns.forEach(btn => {
    btn.disabled = true;
    const correct = questions[currentQuestion].answers.find(a => a.text === btn.innerText).correct;
    btn.classList.add(correct ? 'correct' : 'wrong');
  });
  nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if(currentQuestion < questions.length){
    showQuestion();
  } else {
    questionContainer.innerHTML = `<h3>Quiz Completed!</h3>`;
    nextBtn.style.display = 'none';
  }
});

showQuestion();
let score = 0;
const scoreDisplay = document.getElementById('score-display');
function selectAnswer(selectedBtn, isCorrect) {
  const allBtns = document.querySelectorAll('.answer-btn');
  allBtns.forEach(btn => {
    btn.disabled = true;
    const correct = questions[currentQuestion].answers.find(a => a.text === btn.innerText).correct;
    btn.classList.add(correct ? 'correct' : 'wrong');
  });

  if (isCorrect) {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;
  }

  nextBtn.style.display = 'inline-block';
}
function fetchJoke(){
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke').innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById('joke').innerText = "Failed to load joke!";
    });
}
const images = [
  'p1.jpg',
  'p2.jpg',
  'p3.jpg'
];
let currentImg = 0;
let carouselInterval;


function showImage() {
  const img = document.getElementById('carousel-img');
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[currentImg];
    img.style.opacity = 1;
  }, 300);
}

function nextImage() {
  currentImg = (currentImg + 1) % images.length;
  showImage();
}

function prevImage() {
  currentImg = (currentImg - 1 + images.length) % images.length;
  showImage();
}


function startCarousel() {
  //carouselInterval = setInterval(nextImage, 3000); // change image every 3 seconds
}


function stopCarousel() {
  clearInterval(carouselInterval);
}

document.getElementById('carousel-img').addEventListener('mouseover', stopCarousel);
document.getElementById('carousel-img').addEventListener('mouseout', startCarousel);


showImage();
startCarousel();