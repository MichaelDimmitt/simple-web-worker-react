import './App.css';
import loopWorker from 'workerize-loader!../../workers/loopWorker'; // eslint-disable-line import/no-webpack-loader-syntax
import { callWebWorker } from '../../utils/workerUtils'
import { useState } from 'react';
const App = () => {
  const handleWebWorkerExampleClick = (e) => {
    e.preventDefault()
    // example with useState passed as a callback
    callWebWorker(loopWorker, "countToBillion", setResultText)

    // example with console.log passed as a callback additional params like indexToStartCounting get sent to the worker
    const indexToStartCounting = 0
    callWebWorker(loopWorker, "countToBillion", console.log, indexToStartCounting)

    // note: you could also fire a network request when the worker completes to an analytic service 
    // or other api to track calculated or filtered information without blocking the main thread.
    
    // example to handle nested data and console log the result of the filterDataWorker web worker
    const largeDataObject = { a: 'text', b: { c: 'more text', d: 'last item '} }
    callWebWorkerHandleNestedData(loopWorker, "countToBillion   ", console.log, largeDataObject)
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
