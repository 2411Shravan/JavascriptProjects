const quizData=[
    {
        question: "Which is the capital of India?",
        a: "Delhi",
        b: "Mumbai",
        c: "Bengaluru",
        d:"Chennai",
        correct:"a",
    },
    {
        question: "Which is the scripting language among these?",
        a: "JS",
        b: "Python",
        c: "C++",
        d:"C#",
        correct:"a",
    },
    {
        question: "What is the formula to speed to calculate velocity?",
        'a': "dx/dt",
        'b': "dt/dx",
        'c': "dv/dt",
        'd':"dt/dv",
        'correct':"a",
    },
    {
        question: "What is the chemical formula of sulphuric acid?",
        a: "H3SO4",
        b: "H2S04",
        c: "H2S05",
        d:"None of these",
        correct:"b",
    },
    {
        question: "Which is of these is not used for backend technology?",
        a: "Python",
        b: "PHP",
        c: "NODE",
        d:"CSS",
        correct:"d",
    },
    {
        question: "Flex-box is used in ?",
        a: "JS",
        b: "Python",
        c: "CSS",
        d:"C",
        correct:"c",
    },
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("atext");
const b_text = document.getElementById("btext");
const c_text = document.getElementById("ctext");
const d_text = document.getElementById("dtext");
let ans = undefined;
const getAnswer = document.querySelectorAll('.answer');
const finalDisplay = document.getElementById('reply');

let Question=0;
let score=0;
let answer=undefined;
loadQuiz();
showscore();

function showscore() {
    console.log(score);
}


function loadQuiz() {
    deselect();
    const currentQuizData = quizData[Question];
   

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    

}
function answerSelector(){
    
    getAnswer.forEach((answer)=>{
        if(answer.checked){
            ans = answer.id;
        }
    });

    return ans;
}

function deselect(){
    getAnswer.forEach((answer)=>{
        
            answer.checked = false;
       
    });
}

function changeQuestion(){
  const answer =   answerSelector()
  console.log(answer);
  if(answer){
    if(answer === quizData[Question].correct){
        score++;
        
        
    }
    Question++;
  

    if (Question<quizData.length){
        loadQuiz();
     }
    else{
        finalDisplay.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>
    `;
     }
  }

    
   
    
}