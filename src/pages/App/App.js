import './App.css';
import loopWorker from 'workerize-loader!../../workers/loopWorker'; // eslint-disable-line import/no-webpack-loader-syntax
import { callWebWorker } from '../../utils/workerUtils'
import { useState } from 'react';
function App() {
  function handleWebWorkerExampleClick(e) {
    e.preventDefault()
    // console log example, but callWebWorker returns a promise!
    callWebWorker(loopWorker, "countToBillion", setResultText)
    callWebWorker(loopWorker, "countToBillion", console.log)
  }
  const [resultText, setResultText] = useState('')
  return (
    <div className="App">
      <header >
        <a
          href="/"
          className="App-link"
          onClick={handleWebWorkerExampleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          random link
         </a>
      </header>
      <h1>{resultText}</h1>
    </div>
  );
}

export default App;
