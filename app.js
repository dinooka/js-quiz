
const correctAnswers = ['E', 'B', 'C', 'D', 'A'];

const form = document.querySelector('.quiz-form');
const results = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const scorePerQuestion = 100/correctAnswers.length;

    const userAnswers = [ form.q1.value, form.q2.value, form.q3.value,
        form.q4.value, form.q5.value,];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index])
        {
            score += scorePerQuestion;
        }
        
    })
    // scroll to the top of the page
    scrollTo(0,0); // equal to window.scrollTo(0,0)
    // show results on the page
    results.querySelector('span').textContent = `${score}%`;
    results.classList.remove('d-none');

    let userScore = 0;
    const timer = setInterval(() => {
    results.querySelector('span').textContent = `${userScore}%`;
    
    if (userScore === score) {
        clearInterval(timer);
    }  
    else{
        userScore++;
    }
}, 10);

});

// let i = 0;
// const timer = setInterval(() => {
//     console.log('Hello Sri Lanka');
//     i++;
//     if (i === 10) {
//         clearInterval(timer);
//     }  
// }, 1000);