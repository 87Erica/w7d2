const quizQuestions = [   //set up questions and answers in key value pairs
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Hyperlinks and Text Markdown Lists",
            b: "Hypertext Markup Language",
            c: "Hypen Text Markup Language"        
        },
        correctAnswer: "b"
    },
    {
        question: "What is the search bar called in the Chrome Browser?",
        answers: {
            a: "Integrated Tool Bar",
            b: "Omnibox",
            c: "Extension"
        },
        correctAnswer: "b" 
    },
    {
        question: "What does CSS do?",
        answers: {
            a: "It provides funtionality and structure",
            b: "It styles the page and adds visual appeal",
            c: "It connects the content on the page to the internet"
        },
        correctAnswer: "b"
    }
];

//Set up function to display quiz questions
function displayQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {     //for loop to evaluate answers
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`

        );
    });

    quizContainer.innerHTML = output.join('');
}

// checks users answers, counts correct ones, and updates results
function showResults() {
    const quizContainer = document.getElementById('quiz');
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;


    document.getElementById('retake').style.display = 'block';
    document.getElementById('submit').style.display = 'none';
}

//Function to reset the Quiz
function resetQuiz() {
    document.getElementById('results').innerHTML = '';

    displayQuiz();  //reset quiz

    document.getElementById('retake').style.display = 'none';  //hides the retake button and display submit button
    document.getElementById('submit').style.display = 'block';
}

//generates HTML for the quiz questions and inserts it into quiz div
displayQuiz();

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', showResults);

const retakeButton = document.getElementById('retake');
retakeButton.addEventListener('click', resetQuiz);

//used copilot and chatgpt to set up code and to find addEventListener function and the overall structure of javascript