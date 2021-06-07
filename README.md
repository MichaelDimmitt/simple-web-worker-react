## simple-web-worker-react
using the workerize-loader, modeled after kent c dodds performance workshop

## why web worker
Putting a long task in a promise.then() will not get it off the main thread.<br/>
Insight from stack overflow answer: https://stackoverflow.com/a/52444964/5283424<br/>
```
promises don't make anything asynchronous or parallel.
They can only be used to observe things that are already asynchronous or parallel.
```

## Links
### Workerize related links:
https://github.com/developit/workerize-loader

https://github.com/kentcdodds/super-simple-web-workers.git<br/>
https://github.com/kentcdodds/react-performance

https://kentcdodds.com/workshops/react-performance<br/>
https://kevincunningham.co.uk/posts/kcd-react-performance

### Mdn Links
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API<br/>
https://github.com/mdn/simple-web-worker

### cool reading
https://github.com/tc39/proposal-js-module-blocks/issues/43<br/>
https://github.com/tc39/proposal-js-module-blocks/issues/21

## Project Layout

The following directory structure is used for this react project:

```
├── src
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   └── App
│   │       ├── App.css
│   │       ├── App.js
│   │       └── App.test.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── utils
│   │   └── workerUtils.js
│   └── workers
│       └── loopWorker.js
│       └── expensiveCalculationWorker.js
│       └── flattenLargeObjectWorker.js
```

## When does this make sense?

When there is an expensive function that is happening often.

A value that cant be memoized because the value changes that is sent to the function.

But the beauty of this approach is that if you want to some logic as a web worker it is simple and fast 
1) move the function to a seperate file
2) and call the function in the same manner using the util helper.
