import { useState } from 'react';
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [input, setInput] = useState('');
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operator, setOperator] = useState(undefined);
  const [equalPressed, setEqualPressed] = useState(false);

  const buttons = [
    { label: 'AC', id: 'clear', class: 'reset'},
    { label: '±', id: 'negative', class: 'negative'},
    { label: 'x', id: 'multiply', class: 'operator'},
    { label: 7, id: 'seven', class: 'number'},
    { label: 8, id: 'eight', class: 'number'},
    { label: 9, id: 'nine', class: 'number'},
    { label: '÷', id: 'divide', class: 'operator'},
    { label: 4, id: 'four', class: 'number'},
    { label: 5, id: 'five', class: 'number'},
    { label: 6, id: 'six', class: 'number'},
    { label: '-', id: 'subtract', class: 'operator'},
    { label: 1, id: 'one', class: 'number'},
    { label: 2, id: 'two', class: 'number'},
    { label: 3, id: 'three', class: 'number'},
    { label: '+', id: 'add', class: 'operator'},
    { label: 0, id: 'zero', class: 'zero'},
    { label: '.', id: 'decimal', class: 'decimal'},
    { label: '=', id: 'equals', class: 'equals'}
  ];

  return (
    <div className="App">
     <div className="calculator">
       <Display input={input} currentNumber={currentNumber} operator={operator} />
       <div className="keyboard">
        <div className="button-container">
          {buttons.map(btn => (
              <Button key={btn.id} btn={btn} input={input} setInput={setInput} currentNumber={currentNumber} setCurrentNumber={setCurrentNumber} operator={operator} setOperator={setOperator} equalPressed={equalPressed} setEqualPressed={setEqualPressed} />
            )
          )}
        </div>
        <div className="speaker"></div>       
       </div>
     </div>
    </div>
  );
}

export default App;


// import { useState } from 'react';


// function App() {
//   const [calc, setCalc] = useState("");
//   const [result, setResult] = useState("");
  
//   const ops = ['/', '*', '+', '-', '.'];

//   // create a function for handling operators
//   const updateCalc = value => {
//     if (
//       ops.includes(value) && calc === '' ||
//       ops.includes(value) && ops.includes(calc.slice(-1)
//       ) 
//     ) {
//       return;
//     }
//     setCalc(calc + value);

//     if (!ops.includes(value)) {
//       setResult(eval(calc + value).toString());
//     }
//   }

//   // create a function for listing digits 1-9 rather than making individual buttons via HTML
//   const createDigits = () => {
//     const digits = [];

//     for (let i = 1; i < 10; i++) {
//       digits.push(
//         <button 
//           onClick={() => updateCalc(i.toString())} 
//           key={i}>
//             {i}
//         </button>
//       )
//     }
//     return digits;
//   }
//   // create a function for determining outcomes
//   const calculate = () => {
//   setCalc(eval(calc).toString());
//   }

//   // create a function for deleting last entry, will revisit and possibly add a clear function
//   const deleteLast = () => {
//     if (calc == '') {
//       return;
//     }

//     const value = calc.slice(0, -1);

//     setCalc(value);
// //  necessary for display value to clear after previous entry
//     if (ops.includes(value.slice(-1))) {
//       setResult(eval(value.toString().slice(0,-1)));  
//     }
//     else{
//       setResult(eval(value.toString()));  
//     }
//   }

//   return (
//     <div className="App">
//       <div className="calculator">
//         <div className="display">
//            {result ? <span>({result})</span> : ''}
//            { calc || "0" }
//         </div>
//         <div className="operators">
//           <button onClick={() => updateCalc('/')}>/</button>
//           <button onClick={() => updateCalc('*')}>*</button>
//           <button onClick={() => updateCalc('+')}>+</button>
//           <button onClick={() => updateCalc('-')}>-</button>
//           <button onClick={deleteLast}>DEL</button>
//         </div>
//         <div className="digits">
//           { createDigits() }
//           <button onClick={() => updateCalc('0')}>0</button>
//           <button onClick={() => updateCalc('.')}>.</button>
          
//           <button onClick={calculate}>=</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
