import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const TriplydraQuiz = () => {

    const Questions = [
        {
            questionText: 'What type of attack hurts me the most?',
            answerOptions:[
                { answerText: 'Earth', isCorrect: false },
                { answerText: 'Water', isCorrect: false },
                { answerText: 'Forest', isCorrect: true },
                { answerText: 'Twilight', isCorrect: false },
            ],
        },
        {
            questionText: 'What type of Role do I play the best in a team?',
            answerOptions:[
                { answerText: 'Setter/Utility', isCorrect: false },
                { answerText: 'Staller', isCorrect: false },
                { answerText: 'Sweeper', isCorrect: false },
                { answerText: 'Tank', isCorrect: true },
            ],
        },
        {
            questionText: 'What revomon did I evolve from?',
            answerOptions:[
                { answerText: 'Caracell', isCorrect: false },
                { answerText: 'Doubleel', isCorrect: true },
                { answerText: 'Wolpan', isCorrect: false },
                { answerText: 'Raival', isCorrect: false },
            ],
        },
        {
            questionText: 'What are my highest stats?',
            answerOptions:[
                { answerText: 'Sp.Def/Atk', isCorrect: false },
                { answerText: 'Atk/HP', isCorrect: true },
                { answerText: 'Speed/Sp.Atk', isCorrect: false },
                { answerText: 'Sp.Def/Def', isCorrect: false },
            ],
        },
        {
            questionText: 'What town Can you catch me at and what time of the day?',
            answerOptions:[
                { answerText: 'Cinvia only at Night', isCorrect: false },
                { answerText: 'Kadric all day', isCorrect: false },
                { answerText: 'Marquis at Afternoon', isCorrect: false },
                { answerText: 'Sakura all day', isCorrect: true },
            ],
        },
        {
            questionText: 'What revomon is your best option to fight me??',
            answerOptions:[
                { answerText: 'Deksciple', isCorrect: true },
                { answerText: 'Polluvern', isCorrect: false },
                { answerText: 'Craggon', isCorrect: false },
                { answerText: 'Blizzora', isCorrect: false },
            ],
        },
        {
            questionText: 'Which one is my ability?',
            answerOptions:[
                { answerText: 'Pressure', isCorrect: false },
                { answerText: 'Snow Warning', isCorrect: false },
                { answerText: 'Rain Dish', isCorrect: false },
                { answerText: 'Torrent', isCorrect: true },
            ],
        },
        {
            questionText: 'What nature is best for me?',
            answerOptions:[
                { answerText: 'Jolly', isCorrect: false },
                { answerText: 'Modest', isCorrect: false },
                { answerText: 'Impish', isCorrect: true },
                { answerText: 'Adamant', isCorrect: false },
            ],
        },
        {
            questionText: 'What are my types?',
            answerOptions:[
                { answerText: 'Stone/Earth', isCorrect: false },
                { answerText: 'Earth/Water', isCorrect: true },
                { answerText: 'Draconic/Earth', isCorrect: false },
                { answerText: 'Ice/Draconic', isCorrect: false },
            ],
        },
        {
            questionText: 'What Move Hurts me the most?',
            answerOptions:[
                { answerText: 'Ice Punch', isCorrect: false },
                { answerText: 'Avalanche', isCorrect: false },
                { answerText: 'Draco-Meteor', isCorrect: false },
                { answerText: 'Energy ball', isCorrect: true },
            ],
        },
        ]
    
    
    
        const [question, questionChange] = useState(`Are you Ready?`);
        const [letsGo, disapear] = useState( <button className='Btn' onClick={() => startQuiz()}>Lets go!</button>)
        const [CurrentQuestion, setCurrentQuestion] = useState(0)
    
        // Hides the questions and answers before lets go button is clicked.
        const [toggle, setToggle] = useState(false)
    
    // The Score
    
        const [score, setScore] = useState(0);
        // Moves on to the next question when an answer is clicked
        const answerButtonClick = (isCorrect ) => {
            if (isCorrect===true) {
                setScore(score + 1);
                
            };
            const nextQuestion = CurrentQuestion + 1;
            setCurrentQuestion(nextQuestion);
            
    
        };
    
    // This function hides certain buttons
        function startQuiz() {
            questionChange('');
            disapear(``)
            
            setToggle(!toggle)
        };
        let knowledge = '';
        if (score <= 2) {
             knowledge = <h2
             style={{
                color: 'Green',
                backgroundColor: 'black',
                fontSize: '50px',
                borderRadius: '10%',
                marginTop:'90px'
            }}>Beginner!</h2>
        };
        if (score <= 5 && score >=3) {
            knowledge = <h2
            style={{
                color: 'Yellow',
                backgroundColor: 'black',
                fontSize: '50px',
                borderRadius: '10%',
                marginTop:'90px'
            }}>Rookie!</h2>
        };
        if (score <= 8 && score >=6) {
            knowledge = <h2 style={{
                color: 'Orange',
                backgroundColor: 'black',
                fontSize: '50px',
                borderRadius: '10%',
                marginTop:'90px'
            }}>Intermediate!</h2>
        };
        if (score <= 9 && score >=7) {
            knowledge = <h2 style={{
                color: 'Red',
                backgroundColor: 'black',
                fontSize: '50px',
                borderRadius: '10%',
                marginTop:'90px'
            }}>Champion!</h2>
        };
        if (score === 10) {
            knowledge = <h2
            style={{
                color: 'Purple',
                backgroundColor: 'black',
                fontSize: '50px',
                borderRadius: '10%',
                marginTop:'90px'
            }}>Grand Master!</h2>
        };
    
    
        if (CurrentQuestion === Questions.length) {
           
            return <div style={{
                color: 'black',
                backgroundColor: 'black',
                fontSize: '17px',
                borderRadius: '10%',
                marginTop:'70px'
            }} className='body'><h2 >'You finished the quiz! your Score is {score} correct out of {Questions.length} Questions.'</h2><h1 style={{
                color: 'white',
                backgroundColor: 'black',
                fontSize: '30px',
                borderRadius: '10%',
                marginTop:'70px'
            }}>Your level of Knowledge about Triplydra is   {knowledge}</h1>
            <img src="https://nft.revomon.io/image/raw/revomon/260_shiny.png" className="Revomons" alt="logo" />  
            <Link to='/'>
                <button
                style={{
                    color: 'white',
                    background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',
                    fontSize: '25px',
                    borderRadius: '10%',
                    marginTop:'90px'
                }}className='Btn'>Battle Different Revo</button>
            </Link>
            
            </div>
        };
    
    return ( 
        <div className="body">
            
            <h2 style={{margin:'20px'}}>VS Triplydra</h2>
            <div className="main">
               <img src="https://nft.revomon.io/image/raw/revomon/260_shiny.png" className="Revomons" alt="logo" /> 
               
            </div>

            <div className="QuizPage">
                {/* Questions */}
                
                <span>Question {CurrentQuestion + 1}</span>/{Questions.length}
                {startQuiz}
                <h3>{question}
                    {toggle && (
                    (Questions[CurrentQuestion].questionText)
                )}
                </h3>
                {letsGo}

                {/* Answer Buttons */}
                <div className="AnswerBtns">
                    {toggle && (
                       
                        (Questions[CurrentQuestion].answerOptions.map((answerOptions)=> 
                        <button onClick={() => answerButtonClick(answerOptions.isCorrect)} className='Btn'>{answerOptions.answerText}</button>))
                    )}
                    
                    
     

                </div>
            </div>

                        {/* Return to home page */}
                <div>
                <Link to='/'>
                    <button
                    style={{
                        color: 'white',
                        background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',
                        fontSize: '25px',
                        borderRadius: '10%',
                        marginTop:'90px'
                    }}className='Btn'>Battle Different Revo</button>
                </Link>
                </div>
                

        </div>
     );
}
 
export default TriplydraQuiz;