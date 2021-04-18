// returns a promise, also cleans itself up!
export const callWebWorker = (passedInstance, method, ...rest) => {
  console.log({rest})
  let instance = new passedInstance();
  return instance[method].apply(null, rest)
    .then(x => {
      console.log({x});
      return x;
    })
    .then(_ => instance.terminate())
    .catch(_ => instance.terminate());
}

export const callWebWorkerHandleCrazyData = (passedInstance, method, ...rest) => {
  console.log({rest})
  // JSON.parse all of the variables using rest.map in the worker function!
  const fixedData = rest.map(x => JSON.stringify(x))
  let instance = new passedInstance();
  return instance[method].apply(null, fixedData)
    .then(x => {
      console.log({x});
      return x;
    })
    .then(_ => instance.terminate())
    .catch(_ => instance.terminate());
}
