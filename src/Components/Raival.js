import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const RaivalQuiz = () => {

    const Questions = [
        {
            questionText: 'What Move Hurts me the most?',
            answerOptions:[
                { answerText: 'Rock Tomb', isCorrect: false },
                { answerText: 'Sludge Wave', isCorrect: false },
                { answerText: 'Ice Beam', isCorrect: true },
                { answerText: 'Energy ball', isCorrect: false },
            ],
        },
        {
            questionText: 'What town Can you catch me at and what time of the day?',
            answerOptions:[
                { answerText: 'Cinvia at Night', isCorrect: false },
                { answerText: 'Kadric at night', isCorrect: true },
                { answerText: 'Marquis at Afternoon', isCorrect: false },
                { answerText: 'Kadric at Morning', isCorrect: false },
            ],
        },
        {
            questionText: 'What revomon is your best option to fight me??',
            answerOptions:[
                { answerText: 'Moomega', isCorrect: true },
                { answerText: 'Azuroon', isCorrect: false },
                { answerText: 'Nightmort', isCorrect: false },
                { answerText: 'Blizzora', isCorrect: false },
            ],
        },
        {
            questionText: 'Which one is my ability?',
            answerOptions:[
                { answerText: 'Pressure', isCorrect: true },
                { answerText: 'Shadow Tag', isCorrect: false },
                { answerText: 'Dark aura', isCorrect: false },
                { answerText: 'Solar power', isCorrect: false },
            ],
        },
        {
            questionText: 'What nature is best for me?',
            answerOptions:[
                { answerText: 'Jolly/Timid', isCorrect: false },
                { answerText: 'Modest/Bold', isCorrect: true },
                { answerText: 'Timid/Brave', isCorrect: false },
                { answerText: 'Adamant/Impish', isCorrect: false },
            ],
        },
        {
            questionText: 'What attack am i suddenly weak to when I use the move Roost?',
            answerOptions:[
                { answerText: 'Water Type Move', isCorrect: false },
                { answerText: 'Earth type Moves', isCorrect: true },
                { answerText: 'Draconic type Moves', isCorrect: false },
                { answerText: 'Toxic Type moves', isCorrect: false },
            ],
        },
        {
            questionText: 'What is my Tier in the PVP Meta?',
            answerOptions:[
                { answerText: 'C-Tier', isCorrect: false },
                { answerText: 'B-Tier', isCorrect: false },
                { answerText: 'S-Tier', isCorrect: true },
                { answerText: 'A-Tier', isCorrect: false },
            ],
        },
        {
            questionText: 'What is my Hidden Ability called??',
            answerOptions:[
                { answerText: 'Levitate', isCorrect: false },
                { answerText: 'Marvel Scale', isCorrect: false },
                { answerText: 'Multiscale', isCorrect: false },
                { answerText: 'Static', isCorrect: true },
            ],
        },
        {
            questionText: 'What is my Rarity?',
            answerOptions:[
                { answerText: 'Rare', isCorrect: false },
                { answerText: 'Legendary', isCorrect: true },
                { answerText: 'Limited time Rare', isCorrect: false },
                { answerText: 'Common', isCorrect: false },
            ],
        },
        {
            questionText: 'What are my highest stats?',
            answerOptions:[
                { answerText: 'Sp.Def/Atk', isCorrect: false },
                { answerText: 'Sp.Atk/HP', isCorrect: false },
                { answerText: 'Speed/Sp.Atk', isCorrect: true },
                { answerText: 'Sp.Def/Def', isCorrect: false },
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
            }}>Your level of Knowledge about Raival is   {knowledge}</h1>
            <img src="https://nft.revomon.io/image/raw/revomon/145_shiny.png" className="Revomons" alt="logo" />  
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
            
            <h2 style={{margin:'20px'}}>VS Raival</h2>
            <div className="main">
               <img src="https://nft.revomon.io/image/raw/revomon/145_shiny.png" className="Revomons" alt="logo" /> 
               
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
 
export default RaivalQuiz;