import {useState, useRef} from 'react'
import ResultModal from "./ResultModal";

const TimeChallenge = ({Title, targetTime}) => {
    let timer = useRef();
    let dialogSet = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerisActive = timeRemaining >0 && timeRemaining < targetTime *1000;

    if (timeRemaining <=0){
        clearInterval(timer.current);
        dialogSet.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }
    function handleTimer(){
       timer.current =   setInterval(()=> {
        setTimeRemaining((prevTimeRemaining)=> prevTimeRemaining -  10)
        },10);
    }
    function handleStop(){
        dialogSet.current.open();
        clearInterval(timer.current);
    }
  return (
    <>
    <ResultModal ref = {dialogSet} targetTime = {targetTime} timeLeft = {timeRemaining} onReset = {handleReset} />
    <section className="challenge">
    <h2> {Title}  </h2>
    <p className="challenge-time"> {targetTime} second {targetTime > 1 ? 's' : ''}</p> 
    <p> 
        <button onClick = {timerisActive? handleStop: handleTimer}> {timerisActive? "stop challenge" : "start challenge"} </button>
    </p>
    <p className = {timerisActive ? "active" : undefined}>
    {timerisActive ? "time is running.." : "time is inactve "} 
    </p>
    </section>
    </>
  )
}

export default TimeChallenge