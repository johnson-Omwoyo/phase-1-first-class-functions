function receivesAFunction(fun) {
  fun();
}
function returnsANamedFunction() {
  return (namedFunction = () => {});
}

let returnsAnAnonymousFunction = () => {
  return function () {};
};
