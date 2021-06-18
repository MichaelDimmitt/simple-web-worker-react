// returns a promise, also cleans itself up!
export const callWebWorker = (passedInstance, method, callback, ...rest) => {
  // 1) callback determines what to do after the web worker completes
  // 2) additional arguments are relayed to the web worker using ...rest
  let instance = new passedInstance();
  return instance[method].apply(null, rest)
    .then(x => {
      callback(x);
      return x;
    })
    .then(_ => instance.terminate())
    .catch(_ => instance.terminate());
}

export const callWebWorkerHandleNestedData = (passedInstance, method, callback, ...rest) => {
  // JSON.parse all of the variables using rest.map in the worker function!
  const fixedData = rest.map(x => JSON.stringify(x))
  let instance = new passedInstance();
  return instance[method].apply(null, fixedData)
    .then(x => {
      callback(x);
      return x;
    })
    .then(_ => instance.terminate())
    .catch(_ => instance.terminate());
}
