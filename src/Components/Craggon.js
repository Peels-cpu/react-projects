import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const CraggonQuiz = () => {
    
    const Questions = [

        {
            questionText: 'What revomon is your best option to fight me after I used dragon Dance?',
            answerOptions:[
                { answerText: 'Furnice', isCorrect: false },
                { answerText: 'Nightmort', isCorrect: false },
                { answerText: 'Blizzora', isCorrect: false },
                { answerText: 'Triplydra', isCorrect: true },
            ],
        },
        {
            questionText: 'What town Can you catch me at and what time of the day?',
            answerOptions:[
                { answerText: 'Cinvia at Night', isCorrect: false },
                { answerText: 'Ramboo at night', isCorrect: true },
                { answerText: 'Marquis at Afternoon', isCorrect: false },
                { answerText: 'Kadric at Morning', isCorrect: false },
            ],
        },
        {
            questionText: 'Which one is my ability?',
            answerOptions:[
                { answerText: 'Pressure', isCorrect: false },
                { answerText: 'Shadow Tag', isCorrect: false },
                { answerText: 'Dark aura', isCorrect: false },
                { answerText: 'Multiscale', isCorrect: true },
            ],
        },
        {
            questionText: 'What nature is best for me?',
            answerOptions:[
                { answerText: 'Jolly/Adamant', isCorrect: true },
                { answerText: 'Modest/Timid', isCorrect: false },
                { answerText: 'Lonely/Bold', isCorrect: false },
                { answerText: 'Adamant/Brave', isCorrect: false },
            ],
        },
        {
            questionText: 'What are my Type(s)?',
            answerOptions:[
                { answerText: 'Draconic/Spirit', isCorrect: false },
                { answerText: 'Sky/Draconic', isCorrect: true },
                { answerText: 'Draconic/Thunder', isCorrect: false },
                { answerText: 'Sky/Fire', isCorrect: false },
            ],
        },
        {
            questionText: 'What Move Hurts me the most?',
            answerOptions:[
                { answerText: 'Outrage', isCorrect: false },
                { answerText: 'Ice Beam', isCorrect: true },
                { answerText: 'Rock slide', isCorrect: false },
                { answerText: 'Dragon Claw', isCorrect: false },
            ],
        },
        {
            questionText: 'What type of attack(s) hurts me the most?',
            answerOptions:[
                { answerText: 'Phantom/Fire/Earth/Time', isCorrect: false },
                { answerText: 'Bug/Water/Farts/Spirit', isCorrect: false },
                { answerText: 'Ice/Draconic/Spirit/Stone', isCorrect: true },
                { answerText: 'Twilight/Battle/Forest/Sky', isCorrect: false },
            ],
        },
        {
            questionText: 'What does my Ability Multiscale do?',
            answerOptions:[
                { answerText: 'Increases my defense by 1 stage', isCorrect: false },
                { answerText: 'My Scales allow me to look pretty', isCorrect: false },
                { answerText: 'Only super effective attacks can damage me', isCorrect: false },
                { answerText: 'If HP is full, First damage is cut in half', isCorrect: true },
            ],
        },
        {
            questionText: 'What revomon is my FIRST evolve form?',
            answerOptions:[
                { answerText: 'Somnap', isCorrect: false },
                { answerText: 'Dregg', isCorrect: true },
                { answerText: 'Bluezilla', isCorrect: false },
                { answerText: 'Drakevo', isCorrect: false },
            ],
        },
        {
            questionText: 'What is my Current Tier for the meta?',
            answerOptions:[
                { answerText: 'S-Tier', isCorrect: false },
                { answerText: 'B-Tier', isCorrect: false },
                { answerText: 'A-Tier', isCorrect: true },
                { answerText: 'C-Tier', isCorrect: false },
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
            }}>Your level of Knowledge about Craggon is  {knowledge}</h1>
            <img src="https://nft.revomon.io/image/raw/revomon/149_shiny.png" className="Revomons" alt="logo" />
            
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
            // history.push('/')
        }
    
    return ( 
        <div className="body">
            
            <h2 style={{margin:'20px'}}>Craggon</h2>
            <div >
            <img src="https://nft.revomon.io/image/raw/revomon/149_shiny.png" className="Revomons" alt="logo" />
               
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
                            marginTop:'50px'
                        }}className='Btn'>Battle Different Revo</button>
                    </Link>
                </div>
                

        </div>
     );
}
 
 
export default CraggonQuiz;