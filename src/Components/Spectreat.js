import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const SpectreatQuiz = () => {


    const Questions = [
    {
        questionText: 'What fact about me is true??',
        answerOptions:[
            { answerText: 'My ability is Levitate', isCorrect: false },
            { answerText: 'You can still hatch me in an Egg', isCorrect: false },
            { answerText: 'My Tier in the Pvp Ranking system is S-Tier', isCorrect: false },
            { answerText: 'Only (around) 100 of me exsist in Revomon ', isCorrect: true },
        ],
    },
    {
        questionText: 'What revomon is your best option to fight me??',
        answerOptions:[
            { answerText: 'Romanfrig', isCorrect: false },
            { answerText: 'Nightmort', isCorrect: true },
            { answerText: 'Triplydra', isCorrect: false },
            { answerText: 'Blizzora', isCorrect: false },
        ],
    },
    {
        questionText: 'Which is one of my abilities?',
        answerOptions:[
            { answerText: 'Levitate', isCorrect: false },
            { answerText: 'Infiltrator', isCorrect: true },
            { answerText: 'Curse body', isCorrect: false },
            { answerText: 'Insomnia', isCorrect: false },
        ],
    },
    {
        questionText: 'What does my ability do Flame-body Do?',
        answerOptions:[
            { answerText: 'Phantom types moves are Super Effective', isCorrect: false },
            { answerText: 'Neutral type moves cant hurt me', isCorrect: false },
            { answerText: '30% chance to burn revomon that hit me', isCorrect: true },
            { answerText: 'Powers up fire type moves by 1.5X', isCorrect: false },
        ],
    },
    {
        questionText: 'Which revomon is tied with me on having the strongest Sp.Atack stat',
        answerOptions:[
            { answerText: 'Opawan', isCorrect: false },
            { answerText: 'Eschargot', isCorrect: true },
            { answerText: 'Polluvern', isCorrect: false },
            { answerText: 'Khepreetle', isCorrect: false },
        ],
    },
    {
        questionText: 'What Move Hurts me the most?',
        answerOptions:[
            { answerText: 'Waterfall', isCorrect: false },
            { answerText: 'Rock Slide', isCorrect: false },
            { answerText: 'Earthquake', isCorrect: true },
            { answerText: 'Shadow punch', isCorrect: false },
        ],
    },
    {
        questionText: 'What is my Sp.Atk stat?',
        answerOptions:[
            { answerText: '145', isCorrect: true },
            { answerText: '140 ', isCorrect: false },
            { answerText: '150 ', isCorrect: false },
            { answerText: '130', isCorrect: false },
        ],
    },
    {
        questionText: 'How many shiny Versions on me exsist?',
        answerOptions:[
            { answerText: '100 shinys', isCorrect: false },
            { answerText: '50 shinys', isCorrect: false },
            { answerText: '30 shinys', isCorrect: false },
            { answerText: 'Less than 15 shinys', isCorrect: true },
        ],
    },
    {
        questionText: 'What revomon did I Previously evolve from?',
        answerOptions:[
            { answerText: 'Nightmort', isCorrect: false },
            { answerText: 'I dont evolve', isCorrect: true },
            { answerText: 'Mummole', isCorrect: false },
            { answerText: 'Murdoll', isCorrect: false },
        ],
    },
    {
        questionText: 'What are my lowest stats?',
        answerOptions:[
            { answerText: 'Sp.Def | Atk', isCorrect: false },
            { answerText: 'Atk | HP', isCorrect: true },
            { answerText: 'Speed | Sp.Atk', isCorrect: false },
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
        }}>Your level of Knowledge about Spectreat is  {knowledge}</h1>
        <img src="https://nft.revomon.io/image/raw/revomon/609_shiny.png" className="Revomons" alt="logo" />
        
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
            
            <h2 style={{marginTop:'20px'}}>Spectreat</h2>
            <div className="">
               <img src="https://nft.revomon.io/image/raw/revomon/609_shiny.png" className="Revomons" alt="logo" /> 
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
 
export default SpectreatQuiz;