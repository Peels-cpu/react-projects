import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const LeximinthQuiz = () => {


    const Questions = [
        {
            questionText: 'Which ones are my abilities?',
            answerOptions:[
                { answerText: 'Pankster | Pressure ', isCorrect: false },
                { answerText: 'SoundProof | SolarPower', isCorrect: false },
                { answerText: 'Flame Body | Drizzle', isCorrect: false },
                { answerText: 'Prankster | Levitate', isCorrect: true },
            ],
        },
        {
            questionText: 'What is my Hidden Ability?',
            answerOptions:[
                { answerText: 'Prankster', isCorrect: false },
                { answerText: 'Levitate', isCorrect: false },
                { answerText: 'Soundproof', isCorrect: true },
                { answerText: 'Pressure', isCorrect: false },
            ],
        },
        {
            questionText: 'What is my Atk Stat?',
            answerOptions:[
                { answerText: '140', isCorrect: false },
                { answerText: 'Over 9000', isCorrect: false },
                { answerText: '130', isCorrect: false },
                { answerText: '120', isCorrect: true },
            ],
        },
        {
            questionText: 'What revomon did I previously evolve from?',
            answerOptions:[
                { answerText: 'Bookwyrm', isCorrect: true },
                { answerText: 'Bouldorable', isCorrect: false },
                { answerText: 'Turtlesleth', isCorrect: false },
                { answerText: 'Polluvern', isCorrect: false },
                
            ],
        },
        {
            questionText: 'What does my Ability Prankster Do?',
            answerOptions:[
                { answerText: 'It lets me Paralize revomon', isCorrect: false },
                { answerText: 'Makes Twilight type moves have priority', isCorrect: false },
                { answerText: 'If you dont give me candy ill...', isCorrect: false },
                { answerText: 'It makes non-Damaging moves have +1 priority', isCorrect: true },
            ],
        },
    {
        questionText: 'What priority move can I learn?',
        answerOptions:[
            { answerText: 'I cant Learn priority moves', isCorrect: false },
            { answerText: 'Quick Attack', isCorrect: false },
            { answerText: 'Aqua Jet', isCorrect: false },
            { answerText: 'Sucker Punch', isCorrect: true },
        ],
    },
    {
        questionText: 'What Town can you catch me at and what time?',
        answerOptions:[
            { answerText: 'Cinvia Morning', isCorrect: false },
            { answerText: 'Cinvia Night', isCorrect: true },
            { answerText: 'Cinvia Afternoon', isCorrect: false },
            { answerText: 'In a library at night', isCorrect: false },
        ],
    },
    {
        questionText: 'What other revomon Has the same Attack Stat as me?',
        answerOptions:[
            { answerText: 'Kangcross', isCorrect: false },
            { answerText: 'Skadire', isCorrect: true },
            { answerText: 'Azuroon', isCorrect: false },
            { answerText: 'Tidju', isCorrect: false },
        ],
    },
    {
        questionText: 'What Move Hurts me the most?',
        answerOptions:[
            { answerText: 'Toxic Spikes', isCorrect: false },
            { answerText: 'Dazzling Gleam', isCorrect: true },
            { answerText: 'Earthquake', isCorrect: false },
            { answerText: 'Dark pulse', isCorrect: false },
        ],
    },
    {
        questionText: 'What type of attack(s) hurts me the most?',
        answerOptions:[
            { answerText: 'Toxic | Fire | Water', isCorrect: false },
            { answerText: 'Spirit | Toxic | Metal', isCorrect: true },
            { answerText: 'Metal | Stone | Sky', isCorrect: false },
            { answerText: 'Ice | Fire | Battle', isCorrect: false },
        ],
    },

    ]



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
        }}>Your level of Knowledge about Leximinth is  {knowledge}</h1>
        <img src="https://nft.revomon.io/image/raw/revomon/861_shiny.png" className="Revomons" alt="logo" />
        
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
            
            <h2 style={{marginTop:'20px'}}>Leximinth</h2>
            <div className="">
               <img src="https://nft.revomon.io/image/raw/revomon/861_shiny.png" className="Revomons" alt="logo" /> 
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
 
export default LeximinthQuiz;