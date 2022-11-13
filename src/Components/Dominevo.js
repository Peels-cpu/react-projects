import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const DominevoQuiz = () => {


    const Questions = [
    {
        questionText: 'What town Can you catch me at and what time of the day?',
        answerOptions:[
            { answerText: 'Cinvia at Night', isCorrect: false },
            { answerText: 'Kadric at night', isCorrect: false },
            { answerText: 'Marquis at Afternoon', isCorrect: false },
            { answerText: 'Kadric at Morning', isCorrect: true },
        ],
    },
    {
        questionText: 'What revomon is your best option to fight me??',
        answerOptions:[
            { answerText: 'Opawan', isCorrect: true },
            { answerText: 'Azuroon', isCorrect: false },
            { answerText: 'Nightmort', isCorrect: false },
            { answerText: 'Blizzora', isCorrect: false },
        ],
    },
    {
        questionText: 'Which one is my ability?',
        answerOptions:[
            { answerText: 'Pressure', isCorrect: false },
            { answerText: 'Shadow Tag', isCorrect: false },
            { answerText: 'Dark aura', isCorrect: false },
            { answerText: 'Magic Bounce', isCorrect: true },
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
        questionText: 'Who owns the only shiny dominevo?',
        answerOptions:[
            { answerText: 'Peels', isCorrect: false },
            { answerText: 'SappDaddy', isCorrect: true },
            { answerText: 'TheNamezAnthony', isCorrect: false },
            { answerText: 'AmazaraJC', isCorrect: false },
        ],
    },
    {
        questionText: 'What Move Hurts me the most?',
        answerOptions:[
            { answerText: 'X-sizzors', isCorrect: true },
            { answerText: 'Shadow Sneak', isCorrect: false },
            { answerText: 'Flamethrower', isCorrect: false },
            { answerText: 'Shadowball', isCorrect: false },
        ],
    },
    {
        questionText: 'What type of attack(s) hurts me the most?',
        answerOptions:[
            { answerText: 'Phantom/Fire/Earth', isCorrect: false },
            { answerText: 'Bug/Water/Farts', isCorrect: false },
            { answerText: 'Phantom/Bug/Twilight', isCorrect: true },
            { answerText: 'Twilight/Battle', isCorrect: false },
        ],
    },
    {
        questionText: 'Which move can I bounce back with my ability?',
        answerOptions:[
            { answerText: 'Phantom Type moves', isCorrect: false },
            { answerText: 'Time Type moves', isCorrect: false },
            { answerText: 'Priority Moves', isCorrect: false },
            { answerText: 'Status moves/Stealth rock', isCorrect: true },
        ],
    },
    {
        questionText: 'What revomon did i evolve from?',
        answerOptions:[
            { answerText: 'Loftevo', isCorrect: false },
            { answerText: 'None', isCorrect: true },
            { answerText: 'Hauntevo', isCorrect: false },
            { answerText: 'Drakevo', isCorrect: false },
        ],
    },
    {
        questionText: 'What are my highest stats?',
        answerOptions:[
            { answerText: 'SpDef/Atk', isCorrect: false },
            { answerText: 'SpAtk/HP', isCorrect: false },
            { answerText: 'Speed/SpAtk', isCorrect: true },
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
        }}>Your level of Knowledge about Dominevo is  {knowledge}</h1>
        <img src="https://nft.revomon.io/image/raw/revomon/196_shiny.png" className="Revomons" alt="logo" />
        
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
            
            <h2 style={{marginTop:'20px'}}>Dominevo</h2>
            <div className="">
               <img src="https://nft.revomon.io/image/raw/revomon/196_shiny.png" className="Revomons" alt="logo" /> 
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
                    {/* Return home page button */}
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
 
export default DominevoQuiz;