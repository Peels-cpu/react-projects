import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const NightmortQuiz = () => {


    const Questions = [
    {
        questionText: 'What event can you catch me at, and what town?',
        answerOptions:[
            { answerText: 'Holloween Event Sakura', isCorrect: false },
            { answerText: 'Winter Event Sakura', isCorrect: false },
            { answerText: 'Holloween Event Arktos', isCorrect: false },
            { answerText: 'Winter event Arktos', isCorrect: true },
        ],
    },
    {
        questionText: 'What revomon is your best option to fight me??',
        answerOptions:[
            { answerText: 'Opawan', isCorrect: true },
            { answerText: 'Romanfrig', isCorrect: false },
            { answerText: 'Triplydra', isCorrect: false },
            { answerText: 'Blizzora', isCorrect: false },
        ],
    },
    {
        questionText: 'What is my ability?',
        answerOptions:[
            { answerText: 'Levitate', isCorrect: false },
            { answerText: 'Shadow Tag', isCorrect: false },
            { answerText: 'Curse body', isCorrect: true },
            { answerText: 'Disiguise', isCorrect: false },
        ],
    },
    {
        questionText: 'What does my ability do?',
        answerOptions:[
            { answerText: 'Phantom types moves are Super Effective', isCorrect: false },
            { answerText: 'Neutral type moves cant hurt me', isCorrect: false },
            { answerText: '30% chance to disable moves that hit me', isCorrect: true },
            { answerText: 'Im an evil shadow named morty', isCorrect: false },
        ],
    },
    {
        questionText: 'What priority move can I use?',
        answerOptions:[
            { answerText: 'Quick attack', isCorrect: false },
            { answerText: 'Sucker Punch', isCorrect: true },
            { answerText: 'Aqua jet', isCorrect: false },
            { answerText: 'Extreme Speed', isCorrect: false },
        ],
    },
    {
        questionText: 'What Move Hurts me the most?',
        answerOptions:[
            { answerText: 'Brick Break', isCorrect: false },
            { answerText: 'Shadow sneak', isCorrect: false },
            { answerText: 'Sucker punch', isCorrect: true },
            { answerText: 'Dazzling gleam', isCorrect: false },
        ],
    },
    {
        questionText: 'What type of attack(s) hurts me the most?',
        answerOptions:[
            { answerText: 'Phantom | Twilight ', isCorrect: true },
            { answerText: 'Phantom | Toxic ', isCorrect: false },
            { answerText: 'Battle | Spirit ', isCorrect: false },
            { answerText: 'Twilight | Battle', isCorrect: false },
        ],
    },
    {
        questionText: 'What Nautre is best for me?',
        answerOptions:[
            { answerText: 'Bold', isCorrect: false },
            { answerText: 'Jolly', isCorrect: false },
            { answerText: 'Timid', isCorrect: true },
            { answerText: 'Modest', isCorrect: false },
        ],
    },
    {
        questionText: 'What revomon did I Previously evolve from?',
        answerOptions:[
            { answerText: 'Fawneel', isCorrect: false },
            { answerText: 'Bearmere', isCorrect: true },
            { answerText: 'Mummole', isCorrect: false },
            { answerText: 'Wolpan', isCorrect: false },
        ],
    },
    {
        questionText: 'What are my highest stats?',
        answerOptions:[
            { answerText: 'Sp.Def | Atk', isCorrect: false },
            { answerText: 'Sp.Def | HP', isCorrect: false },
            { answerText: 'Speed | Sp.Atk', isCorrect: true },
            { answerText: 'Sp.Def | Speed', isCorrect: false },
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
        }}>Your level of Knowledge about Nightmort is  {knowledge}</h1>
        <img src="https://nft.revomon.io/image/raw/revomon/94_shiny.png" className="Revomons" alt="logo" />
        
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
            
            <h2 style={{marginTop:'20px'}}>Nightmort</h2>
            <div className="">
               <img src="https://nft.revomon.io/image/raw/revomon/94_shiny.png" className="Revomons" alt="logo" /> 
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
 
export default NightmortQuiz;