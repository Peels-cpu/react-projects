import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const MeganeudraQuiz = () => {

    const Questions = [
        {
            questionText: 'What town Can you catch me at and what time of the day?',
            answerOptions:[
                { answerText: 'Cinvia at morning', isCorrect: false },
                { answerText: 'Cant Catch me anymore', isCorrect: true },
                { answerText: 'Kadric at night', isCorrect: false },
                { answerText: 'Marquis at Afternoon', isCorrect: false },
                
            ],
        },
        {
            questionText: 'What revomon is your best option to fight me??',
            answerOptions:[
                { answerText: 'Buckalloy', isCorrect: false },
                { answerText: 'Moomega', isCorrect: false },
                { answerText: 'Skwerboros', isCorrect: false },
                { answerText: 'Blizzora', isCorrect: true },
            ],
        },
        {
            questionText: 'Which one is my ability?',
            answerOptions:[
                { answerText: 'Damp', isCorrect: false },
                { answerText: 'Sand Force', isCorrect: false },
                { answerText: 'Speed Boost', isCorrect: true },
                { answerText: 'Torrent', isCorrect: false },
            ],
        },
        {
            questionText: 'What nature is best for me?',
            answerOptions:[
                { answerText: 'Impish/Lonely', isCorrect: false },
                { answerText: 'Modest/Timid', isCorrect: false },
                { answerText: 'Timid/Naive', isCorrect: false },
                { answerText: 'Adamant/Jolly', isCorrect: true },
            ],
        },
        {
            questionText: 'I have Three diffrent abilities, which is the best one for pvp?',
            answerOptions:[
                { answerText: 'Swarm', isCorrect: false },
                { answerText: 'Poison Point', isCorrect: false },
                { answerText: 'Speed Boost', isCorrect: true },
                { answerText: 'All of them are Great equally', isCorrect: false },
            ],
        },
        {
            questionText: 'What Move Hurts me the most?',
            answerOptions:[
                { answerText: 'Ice Punch', isCorrect: true },
                { answerText: 'Hyper Beam', isCorrect: false },
                { answerText: 'Flamethrower', isCorrect: false },
                { answerText: 'Fire Blast', isCorrect: false },
            ],
        },
        {
            questionText: 'What type of attack(s) hurts me the most?',
            answerOptions:[
                { answerText: 'Sky/Fire/Spirit', isCorrect: false },
                { answerText: 'Bug/Water/Farts', isCorrect: false },
                { answerText: 'Stone/Ice/Draconic', isCorrect: true },
                { answerText: 'Spirit/Forest/Sky', isCorrect: false },
            ],
        },
        {
            questionText: 'What does my ability speed boost do?',
            answerOptions:[
                { answerText: 'Increase Atk by 1 stage', isCorrect: false },
                { answerText: 'Immune to slow type moves', isCorrect: false },
                { answerText: 'lower speed of enemy by 1', isCorrect: false },
                { answerText: 'Increase speed by 1 stage', isCorrect: true },
            ],
        },
        {
            questionText: 'Who is the person that Voiced me and my evolutions?',
            answerOptions:[
                { answerText: 'Jordan', isCorrect: false },
                { answerText: 'SappDaddy', isCorrect: true },
                { answerText: 'Orange', isCorrect: false },
                { answerText: 'Alardiians', isCorrect: false },
            ],
        },
        {
            questionText: 'What was the name of the town that I was catchable at?',
            answerOptions:[
                { answerText: 'Regalia Town', isCorrect: false },
                { answerText: 'Musterd Town', isCorrect: false },
                { answerText: 'Arktos Town', isCorrect: true },
                { answerText: 'Dragun City Town', isCorrect: false },
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
            }}>Your level of Knowledge about Meganeudra is  {knowledge}</h1>
            <img src="https://nft.revomon.io/image/raw/revomon/545_shiny.png" className="Revomons" alt="logo" />
            
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
            
            <h2 style={{margin:'20px'}}>VS Meganeudra</h2>
            <div className="main">
               <img src="https://nft.revomon.io/image/raw/revomon/545_shiny.png" className="Revomons" alt="logo" /> 
               
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
 
export default MeganeudraQuiz;