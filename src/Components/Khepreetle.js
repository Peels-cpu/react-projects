import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const KhepreetleQuiz = () => {

    const Questions = [
        {
            questionText: 'What town Can you catch me at and what time of the day?',
            answerOptions:[
                { answerText: 'Yakati at afternoon', isCorrect: true },
                { answerText: 'Ramboo at night', isCorrect: false },
                { answerText: 'Marquis at Afternoon', isCorrect: false },
                { answerText: 'Kadric at Morning', isCorrect: false },
            ],
        },
        {
            questionText: 'What revomon is your best option to fight me??',
            answerOptions:[
                { answerText: 'Pandozer', isCorrect: true },
                { answerText: 'Opawan', isCorrect: false },
                { answerText: 'Deksciple', isCorrect: false },
                { answerText: 'Skadire', isCorrect: false },
            ],
        },
        {
            questionText: 'What are my Abilities?',
            answerOptions:[
                { answerText: 'Pressure, Levitate', isCorrect: false },
                { answerText: 'Shadow Tag, Dark Aura', isCorrect: false },
                { answerText: 'Torrent, Speed Boost', isCorrect: false },
                { answerText: 'Flame-body, Swarm', isCorrect: true },
            ],
        },
        {
            questionText: 'What nature is best for me?',
            answerOptions:[
                { answerText: 'Impish', isCorrect: false },
                { answerText: 'Modest', isCorrect: false },
                { answerText: 'Timid', isCorrect: true },
                { answerText: 'Naive', isCorrect: false },
            ],
        },
        {
            questionText: 'Who owns the only shiny Khepreetle?',
            answerOptions:[
                { answerText: 'Acnexia', isCorrect: true },
                { answerText: 'SappDaddy', isCorrect: false },
                { answerText: 'Lives', isCorrect: false },
                { answerText: 'AmazaraJC', isCorrect: false },
            ],
        },
        {
            questionText: 'What Move Hurts me the most?',
            answerOptions:[
                { answerText: 'Surf', isCorrect: false },
                { answerText: 'Rock Slide', isCorrect: true },
                { answerText: 'Ice Beam', isCorrect: false },
                { answerText: 'Flare Blitz', isCorrect: false },
            ],
        },
        {
            questionText: 'What type of attack(s) hurts me the most?',
            answerOptions:[
                { answerText: 'Water/Fire/Earth', isCorrect: false },
                { answerText: 'Bug/Water/Farts', isCorrect: false },
                { answerText: 'Metal/Forest/Twilight', isCorrect: false },
                { answerText: 'Stone/Water/Sky', isCorrect: true },
            ],
        },
        {
            questionText: 'Only I can learn this move, and its beautiful and scary.',
            answerOptions:[
                { answerText: 'Dragon Dance', isCorrect: false },
                { answerText: 'Belly Dance', isCorrect: false },
                { answerText: 'Hyper Dance', isCorrect: false },
                { answerText: 'Quiver Dance', isCorrect: true },
            ],
        },
        {
            questionText: 'What revomon did I evolve from?',
            answerOptions:[
                { answerText: 'Meganeudra', isCorrect: false },
                { answerText: 'None, I am a legend', isCorrect: true },
                { answerText: 'Wyverdant', isCorrect: false },
                { answerText: 'Tetrapion', isCorrect: false },
            ],
        },
        {
            questionText: 'What are my Types?',
            answerOptions:[
                { answerText: 'Bug/Flying', isCorrect: false },
                { answerText: 'Flying/Stone', isCorrect: false },
                { answerText: 'Fire/Bug', isCorrect: true },
                { answerText: 'Bug/Earth', isCorrect: false },
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
            }}>Your level of Knowledge about Khepreetle is   {knowledge}</h1>
            <img src="https://nft.revomon.io/image/raw/revomon/637_shiny.png" className="Revomons" alt="logo" /> 
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
            
            <h2 style={{margin:'20px'}}>Khepreetle</h2>
            <div>
               <img src="https://nft.revomon.io/image/raw/revomon/637_shiny.png" className="Revomons" alt="logo" /> 
               
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
                        // padding: '10px 20px',
                        // margin: '20px',
                        borderRadius: '10%',
                        marginTop:'50px'
                    }}className='Btn'>Battle Different Revo</button>
                </Link>
                </div>
                

        </div>
     );
}
 
export default KhepreetleQuiz;