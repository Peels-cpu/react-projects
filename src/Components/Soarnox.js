import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const SoarnoxQuiz = () => {

    const Questions = [
        {
            questionText: 'What revomon did I evolve from?',
            answerOptions:[
                { answerText: 'Loftevo', isCorrect: false },
                { answerText: 'Soarnap', isCorrect: true },
                { answerText: 'Bookwrym', isCorrect: false },
                { answerText: 'Swiftling', isCorrect: false },
            ],
        },
        {
            questionText: 'What Move Hurts me the most?',
            answerOptions:[
                { answerText: 'Sludge Wave', isCorrect: true },
                { answerText: 'Air Slash', isCorrect: false },
                { answerText: 'Dazzling gleam', isCorrect: false },
                { answerText: 'Shadowball', isCorrect: false },
            ],
        },
        {
            questionText: 'What town Can you catch me at and what time of the day?',
            answerOptions:[
                { answerText: 'Cinvia at Night', isCorrect: false },
                { answerText: 'Kadric at night', isCorrect: false },
                { answerText: 'Ramboo at Afternoon', isCorrect: true },
                { answerText: 'Kadric at Morning', isCorrect: false },
            ],
        },
        {
            questionText: 'What revomon is your best option to fight me??',
            answerOptions:[
                { answerText: 'Furnice', isCorrect: true },
                { answerText: 'Azuroon', isCorrect: false },
                { answerText: 'Tidju', isCorrect: false },
                { answerText: 'Blizzora', isCorrect: false },
            ],
        },
        {
            questionText: 'Which one is my ability?',
            answerOptions:[
                { answerText: 'Pressure', isCorrect: false },
                { answerText: 'Static', isCorrect: false },
                { answerText: 'Disguise', isCorrect: false },
                { answerText: 'Serene Grace', isCorrect: true },
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
            questionText: 'What does my ability Serene Grace do?',
            answerOptions:[
                { answerText: 'It allows me to fly to be immune to ground type moves', isCorrect: false },
                { answerText: 'Doubles the chance of secondary effects from happening', isCorrect: true },
                { answerText: 'It makes revomon paralize when I hit then with a move', isCorrect: false },
                { answerText: 'It makes revomon Flinch when I attack then', isCorrect: false },
            ],
        },
        {
            questionText: 'What type of attack(s) hurts me the most?',
            answerOptions:[
                { answerText: 'Phantom/Fire/Earth/Stone', isCorrect: false },
                { answerText: 'Bug/Water/Toxic/Thunder', isCorrect: false },
                { answerText: 'Toxic/Stone/Thunder/Ice', isCorrect: true },
                { answerText: 'Twilight/Battle/Sky', isCorrect: false },
            ],
        },
        {
            questionText: 'What Tier am I currently in for PvP Meta',
            answerOptions:[
                { answerText: 'B-Tier', isCorrect: false },
                { answerText: 'D-Tier', isCorrect: false },
                { answerText: 'A-Tier', isCorrect: false },
                { answerText: 'S-Tier', isCorrect: true },
            ],
        },
        {
            questionText: 'What is my Rarity?',
            answerOptions:[
                { answerText: 'Common', isCorrect: false },
                { answerText: 'Limited Time Revo', isCorrect: false },
                { answerText: 'Rare', isCorrect: true },
                { answerText: 'Legendary', isCorrect: false },
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
            }}>Your level of Knowledge about Sornox is   {knowledge}</h1>
            <img src="https://nft.revomon.io/image/raw/revomon/468_shiny.png" className="Revomons" alt="logo" />  
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
            
            <h2 style={{margin:'20px'}}>VS Soarnox</h2>
            <div className="main">
               <img src="https://nft.revomon.io/image/raw/revomon/468_shiny.png" className="Revomons" alt="logo" /> 
               
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
 
export default SoarnoxQuiz;