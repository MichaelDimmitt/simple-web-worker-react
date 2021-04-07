import './App.css';
import loopWorker from 'workerize-loader!../../workers/loopWorker'; // eslint-disable-line import/no-webpack-loader-syntax
function App() {
  function triggerLoopWorker(e) {
    e.preventDefault()
    let instance = new loopWorker();
    instance.countToBillion()
      .then(x => {
        console.log({x});
        return x;
      })
      .then(_ => instance.terminate())
      .catch(_ => instance.terminate());
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
