import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const MonkingQuiz = () => {

    const Questions = [
        {
            questionText: 'What town Can you catch me at and what time of the day?',
            answerOptions:[
                { answerText: 'Ramboo at Night', isCorrect: false },
                { answerText: 'Ramboo at Afternoon', isCorrect: true },
                { answerText: 'Kadric at night', isCorrect: false },
                { answerText: 'Marquis at Afternoon', isCorrect: false },

            ],
        },
        {
            questionText: 'What revomon is your best option to fight me??',
            answerOptions:[
                { answerText: 'Tidju', isCorrect: true },
                { answerText: 'Gorcano', isCorrect: false },
                { answerText: 'Raival', isCorrect: false },
                { answerText: 'Craggon', isCorrect: false },
            ],
        },
        {
            questionText: 'What are my Abilties?',
            answerOptions:[
                { answerText: 'Levitate, Kings Power', isCorrect: false },
                { answerText: 'Mace Tail, Nimbus', isCorrect: false },
                { answerText: 'Dark aura, Insomnia', isCorrect: false },
                { answerText: 'Sand/Sheer Force', isCorrect: true },
            ],
        },
        {
            questionText: 'What nature is best for me?',
            answerOptions:[
                { answerText: 'Jolly', isCorrect: true },
                { answerText: 'Modest', isCorrect: false },
                { answerText: 'Timid', isCorrect: false },
                { answerText: 'Adamant', isCorrect: false },
            ],
        },
        {
            questionText: 'What are my Types?',
            answerOptions:[
                { answerText: 'Divine/Tyrant', isCorrect: false },
                { answerText: 'Battle/Sky', isCorrect: false },
                { answerText: 'Earth/Sky', isCorrect: true },
                { answerText: 'Stone/Sky', isCorrect: false },
            ],
        },
        {
            questionText: 'What Move Hurts me the most?',
            answerOptions:[
                { answerText: 'Ice Beam', isCorrect: false },
                { answerText: 'Dark pulse', isCorrect: false },
                { answerText: 'Blizzard', isCorrect: true },
                { answerText: 'Waterfall', isCorrect: false },
            ],
        },
        {
            questionText: 'What type of attack hurts me the most?',
            answerOptions:[
                { answerText: 'Water/Stone/Toxic', isCorrect: false },
                { answerText: 'Water/Fire/Ice', isCorrect: false },
                { answerText: 'Ice/Water/', isCorrect: true },
                { answerText: 'Stone/Ice/Thunder', isCorrect: false },
            ],
        },
        {
            questionText: 'What is my Rarity?',
            answerOptions:[
                { answerText: 'Common', isCorrect: false },
                { answerText: 'Special Event Revomon', isCorrect: false },
                { answerText: 'Rare', isCorrect: false },
                { answerText: 'Legendary', isCorrect: true },
            ],
        },
        {
            questionText: 'What revomon did i evolve from?',
            answerOptions:[
                { answerText: 'Monkey Boy', isCorrect: false },
                { answerText: 'Champlion', isCorrect: false },
                { answerText: 'Lycub', isCorrect: false },
                { answerText: 'None', isCorrect: true },
            ],
        },
        {
            questionText: 'What are my highest stats?',
            answerOptions:[
                { answerText: 'SpDef/Atk', isCorrect: false },
                { answerText: 'Atk/Speed', isCorrect: false },
                { answerText: 'Atk/Sp.Atk', isCorrect: true },
                { answerText: 'SpD/Def', isCorrect: false },
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
                marginTop:'50px'
            }} className='body'><h2 >'You finished the quiz! your Score is {score} correct out of {Questions.length} Questions.'</h2><h1 style={{
                color: 'white',
                backgroundColor: 'black',
                fontSize: '30px',
                borderRadius: '10%',
                marginTop:'50px'
            }}>Your level of Knowledge about Monking is  {knowledge}</h1>
            <img src="https://nft.revomon.io/image/raw/revomon/645_shiny.png" className="Revomons" alt="logo" />  
            <Link to='/'>
                <button
                style={{
                    color: 'white',
                    background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',
                    fontSize: '25px',
                    borderRadius: '10%',
                    marginTop:'50px'
                }}className='Btn'>Battle Different Revo</button>
            </Link>
            
            </div>
        };
    
    return ( 
        <div className="body">
            
            <h2 style={{margin:'20px'}}>Monking</h2>
            <div>
               <img src="https://nft.revomon.io/image/raw/revomon/645_shiny.png" className="Revomons" alt="logo" /> 
               
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
 
export default MonkingQuiz;