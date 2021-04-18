import './App.css';
import loopWorker from 'workerize-loader!../../workers/loopWorker'; // eslint-disable-line import/no-webpack-loader-syntax
function App() {
  function triggerLoopWorker(e) {
    e.preventDefault()
    // console log example, but callWebWorker returns a promise!
    callWebWorker(loopWorker, "countToBillion", 'hi', 'bye')
  }
  return (
    <div className="App">
      <header >
        <a
          href="/"
          className="App-link"
          onClick={triggerLoopWorker}
          target="_blank"
          rel="noopener noreferrer"
        >
          random link
        </a>
      </header>
    </div>
  );
}

export default App;
