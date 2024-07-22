import { forwardRef, useImperativeHandle, useRef } from 'react';
import {createPortal} from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ targetTime, timeLeft, onReset} , ref) {
 const dialog = useRef();
 const result =  timeLeft > 0;
 const formattedTime = (timeLeft / 1000).toFixed(2);
   useImperativeHandle(ref, ()=>{
    return{
        open(){
          dialog.current.showModal();
        }
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>You {result ? "won"  : "lost"}</h2>
      <p>The target time was <strong>{targetTime} seconds</strong></p>
      <p>You stopped the timer with  {formattedTime} seconds left.</p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
