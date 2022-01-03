const quizData = [
    {
        question: "How old I am ?",
        a: '18',
        b: '19',
        c: '20',
        d: '21',
        correct: 'b'
    },
    {
        question: 'Where I was born ?',
        a: 'Tashkent',
        b: 'Andijan',
        c: 'Qashqadaryo',
        d: 'Urganch',
        correct: 'd'
    },
    {
        question: 'Where I am studying ?',
        a: 'WIUT',
        b: 'INHA',
        c: 'TATU',
        d: 'UrDU',
        correct: 'a'
    },
    {
        question: 'What is my area ?',
        a: 'Information technology',
        b: 'Business Management',
        c: 'Finance',
        d: 'Economics with Finance',
        correct: 'a'
    },
    {
        question: 'What kind of cellphone conforms to me ?',
        a: 'iPhone',
        b: 'Huawei',
        c: 'Samsung',
        d: 'Xiaomi',
        correct: 'c'
    }
];

const answerEls = document.querySelectorAll('.answer');
const question = document.getElementById('question-number');
const questionNumber = document.getElementById('card-header');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('btnSubmit');
const card = document.getElementById("card");

let currentQuiz = 0;
let score = 0;
let user = prompt("Please, enter your name !", "User");

function gettingName() {
    if (user != "") {
        loadQuiz();
    }else {
     gettingName();
    }
}
gettingName();

function loadQuiz() {
        let currentQuizData = quizData[currentQuiz];
        question.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
        
    }
function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
           answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            loadQuiz();
            deselectAnswers()
        }else {
            card.style.display = "none";
            if (user == null) {
                alert(`You have finished the quiz test. You can see the result by clicking "Close" `);
            }else {
                alert(`${user}, You have finished the quiz test. You can see the result by clicking "Close"`);
            }
            const result = document.getElementById("result");
            let h1 = document.createElement("h1");
            if (user == null) {
                h1.innerText = `You found ${score} correct answers out of 5 about me`
            }else {
                h1.innerText = `${user}, you found ${score} correct answers out of 5 about me`
            }
            result.appendChild(h1);
            h1.classList.add('display-1');
            h1.classList.add('result_h1')
        } 
    }
})
