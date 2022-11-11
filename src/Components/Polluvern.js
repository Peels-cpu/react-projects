import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const PolluvernQuiz = () => {

    const Questions = [
        {
            questionText: 'Which one is my ability?',
            answerOptions:[
                { answerText: 'Pressure/Levitate', isCorrect: true },
                { answerText: 'Prankster/Torrent', isCorrect: false },
                { answerText: 'Defiant/Inner Focus', isCorrect: false },
                { answerText: 'Pressure/Static', isCorrect: false },
            ]
        },
        {
            questionText: 'What are my highest stats?',
            answerOptions:[
                { answerText: 'Sp.Def/Atk', isCorrect: false },
                { answerText: 'Speed/Sp.Atk', isCorrect: true },
                { answerText: 'Sp.Atk/HP', isCorrect: false },
                { answerText: 'SpD/Def', isCorrect: false },
            ],
        },
        {
            questionText: 'What town Can you catch me at and what time of the day?',
            answerOptions:[
                { answerText: 'Kadric at night', isCorrect: false },
                { answerText: 'Marquis at Afternoon', isCorrect: false },
                { answerText: 'Kadric at Morning', isCorrect: false },
                { answerText: 'Cinvia at Night', isCorrect: true },
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
            questionText: 'What nature is best for me?',
            answerOptions:[
                { answerText: 'Jolly', isCorrect: false },
                { answerText: 'Modest', isCorrect: false },
                { answerText: 'Timid', isCorrect: true },
                { answerText: 'Adamant', isCorrect: false },
            ],
        },
        {
            questionText: 'What is my Current Tier in the Meta for PVP?',
            answerOptions:[
                { answerText: 'A-Tier', isCorrect: false },
                { answerText: 'S-Tier', isCorrect: true },
                { answerText: 'C-Tier', isCorrect: false },
                { answerText: 'B-Tier', isCorrect: false },
            ],
        },
        {
            questionText: 'What Move Hurts me the most?',
            answerOptions:[
                { answerText: 'Psychic', isCorrect: false },
                { answerText: 'Dragon Claw', isCorrect: false },
                { answerText: 'Draco-Meteor', isCorrect: true },
                { answerText: 'Dazzling Gleam', isCorrect: false },
            ],
        },
        {
            questionText: 'What type of attack(s) hurts me the most?',
            answerOptions:[
                { answerText: 'Time/Fire/Earth', isCorrect: false },
                { answerText: 'Toxic/Water/Farts', isCorrect: false },
                { answerText: 'Metal/Bug/Twilight', isCorrect: false },
                { answerText: 'Draconic/Time/Ice', isCorrect: true },
            ],
        },
        {
            questionText: 'Which Move is Super Effective to me if my ability is Pressure?',
            answerOptions:[
                { answerText: 'Normal type moves', isCorrect: false },
                { answerText: 'Shadowball', isCorrect: false },
                { answerText: 'Extreme Speed', isCorrect: false },
                { answerText: 'Earthquake', isCorrect: true },
            ],
        },
        {
            questionText: 'What is the only revomon Faster than me by base speed?',
            answerOptions:[
                { answerText: 'Opawan', isCorrect: false },
                { answerText: 'Skadire', isCorrect: true },
                { answerText: 'Meganeudra', isCorrect: false },
                { answerText: 'Nightmort', isCorrect: false },
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
                marginTop:'90px'
            }} className='body'><h2 >'You finished the quiz! your Score is {score} correct out of {Questions.length} Questions.'</h2><h1 style={{
                color: 'white',
                backgroundColor: 'black',
                fontSize: '30px',
                borderRadius: '10%',
                marginTop:'90px'
            }}>Your level of Knowledge about Polluvern is  {knowledge}</h1>
            <img src="https://nft.revomon.io/image/raw/revomon/804_shiny.png" className="Revomons" alt="logo" /> 
            
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
            // history.push('/')
        }
    
    return ( 
        <div className="body">
            
        <h2 style={{margin:'20px'}}>VS Opawan</h2>
        <div className="main">
            <img src="https://nft.revomon.io/image/raw/revomon/804_shiny.png" className="Revomons" alt="logo" /> 
           
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
 
export default PolluvernQuiz;