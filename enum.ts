enum LoadingState {
  beforeLoad = 'beforeLoad',
  afterLoad = 'afterLoad',
  loading = 'loading'
}

// If we don't give any value of the properties of enumerators
// then it will take incremental values from 0 

console.log(LoadingState.afterLoad);

// number literal Types 
type LiteralTypeExample = 1 | 2 | 3;

// string literal types

function sendEvent(name: "addToCart", data: {productId: number}): void;
function sendEvent(name: "checkout", data: {cartCount: number}): void;
function sendEvent(name: unknown, data: unknown): void {
  console.log(name, data);
}

// Here because of the string literal if first argument is addToCart
// then the data must contain productId property
sendEvent("addToCart", {productId: 123});
sendEvent("checkout", {cartCount: 123});


