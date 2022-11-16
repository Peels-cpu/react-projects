import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const RevupQuiz = () => {


    const Questions = [
        {
            questionText: 'What is the move that only I can learn?',
            answerOptions:[
                { answerText: 'Crush Claw', isCorrect: false },
                { answerText: 'Parting shot', isCorrect: true },
                { answerText: 'Iron Head', isCorrect: false },
                { answerText: 'Thunder Blast', isCorrect: false },
            ],
        },
        {
            questionText: 'What revomon did I Previously evolve from?',
            answerOptions:[
                { answerText: 'Twilevo', isCorrect: false },
                { answerText: 'Venturevo', isCorrect: false },
                { answerText: 'Kasket', isCorrect: false },
                { answerText: 'I dont evolve', isCorrect: true },
            ],
        },
        {
            questionText: 'What are my types?',
            answerOptions:[
                { answerText: 'Earth | Stone', isCorrect: false },
                { answerText: 'Electric | Metal', isCorrect: true },
                { answerText: 'Earth | Metal', isCorrect: false },
                { answerText: 'Water | Fairy', isCorrect: false },
            ],
        },
    {
        questionText: 'How much do I cost in the revostore at revomon.io?',
        answerOptions:[
            { answerText: '100 USD', isCorrect: false },
            { answerText: '20 USD', isCorrect: false },
            { answerText: '30 USD', isCorrect: false },
            { answerText: '50 USD', isCorrect: true },
        ],
    },
    {
        questionText: 'What revomon is your best option to fight me??',
        answerOptions:[
            { answerText: 'Tidju', isCorrect: false },
            { answerText: 'Triplydra', isCorrect: true },
            { answerText: 'Craggon', isCorrect: false },
            { answerText: 'Kasket', isCorrect: false },
        ],
    },
    {
        questionText: 'Which ones are my abilities?',
        answerOptions:[
            { answerText: 'Subtract', isCorrect: false },
            { answerText: 'Minus', isCorrect: false },
            { answerText: 'Plus', isCorrect: true },
            { answerText: 'Divide', isCorrect: false },
        ],
    },
    {
        questionText: 'Which Moves cant I learn?',
        answerOptions:[
            { answerText: 'Fire Fang | Ice Fang', isCorrect: false },
            { answerText: 'Ice Fang | Thunder Fang |', isCorrect: false },
            { answerText: 'Growl | Screech', isCorrect: true },
            { answerText: 'Poison Fang | Explosion', isCorrect: false },
        ],
    },
    {
        questionText: 'How many types am I weak to?',
        answerOptions:[
            { answerText: '3 Types', isCorrect: true },
            { answerText: '4 Types', isCorrect: false },
            { answerText: '2 Types', isCorrect: false },
            { answerText: '5 Types', isCorrect: false },
        ],
    },
    {
        questionText: 'Which number are all my stats at?',
        answerOptions:[
            { answerText: '100', isCorrect: false },
            { answerText: '95', isCorrect: true },
            { answerText: '90', isCorrect: false },
            { answerText: '85', isCorrect: false },
        ],
    },
    {
        questionText: 'What type of attack(s) hurts me the most?',
        answerOptions:[
            { answerText: 'Fire', isCorrect: false },
            { answerText: 'Battle', isCorrect: false },
            { answerText: 'Earth', isCorrect: true },
            { answerText: 'Stone', isCorrect: false },
        ],
    }
    ];



    const [question, questionChange] = useState(`Are you Ready?`);
    const [letsGo, disapear] = useState( <button className='Btn' onClick={() => startQuiz()}>Lets go!</button>)
    const [CurrentQuestion, setCurrentQuestion] = useState(0)
    // Hides the questions and answers before lets go button is clicked.
    const [toggle, setToggle] = useState(false)
    const [timer, setTimer] = useState(false)
    // this componenet  is the timer for each question
    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((count) => (count) -1);
        }, 1000);
        return () => (clearInterval(interval));
      }, [CurrentQuestion]);

    //   This useeffect hook renders the next question when the timer hits zero
    useEffect(() => {
        if (count === 0) {
            if (CurrentQuestion === Questions.length) {
                setCount(count => -10)
                console.log(count)
            }else{
               answerButtonClick() 
            }
            
        }
        
      }, );

// The Score

    const [score, setScore] = useState(0);
    // Moves on to the next question when an answer is clicked
    const answerButtonClick = (isCorrect ) => {
        if (isCorrect===true) {
            setScore(score + 1);
        };
        const nextQuestion = CurrentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        // This resets the counter back to 10 after each question
        if (count !== 10) {
            setCount(count => 10)
            
        };

    };



// This function Starts the quiz when they click the button lets go
    let startQuiz = () => {
        questionChange('');
        disapear('');
        setToggle(!toggle);
        setTimer(!timer);
        setCount(count => 10);
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
        }}>Your level of Knowledge about R3v-Up is  {knowledge}</h1>
        <img src="https://nft.revomon.io/image/raw/revomon/773_shiny.png" className="Revomons" alt="logo" />
        
        <Link to='/react-projects/'>
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
            
            <h2 style={{marginTop:'20px'}}>R3v-Up</h2>
            <div className="">
               <img src="https://nft.revomon.io/image/raw/revomon/773_shiny.png" className="Revomons" alt="logo" /> 
            </div>

            <div className="QuizPage">
                {/* Question Amount and Timer*/}
                <span>Question {CurrentQuestion + 1}</span>/{Questions.length}
                {timer && (<h1>{count}</h1> )}
                {/* Start Quiz lets go button */}
                {startQuiz}
                
                {/* Questions */}
                <h3>
                    {question}
                    
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
            <Link to='/react-projects/'>
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
 
export default RevupQuiz;