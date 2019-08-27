function test() {
  console.warn("1");
}
const test2 = function() {
  console.warn("2");
};
const test3 = function func() {
  console.warn("3");
};

test(); // 1
test2(); // 2
test3(); // 3
func(); // 3

// test() => { }
const func = () => {
  return 1;
};
const func2 = () => 1;
const func3 = () => 1;

const a1 = function(b) {}; // this => function
const a = b => {}; // this => parent

const a2 = b => {};

const b = function({ c }) {};
const b2 = ({ c }) => {};

const self = this;
setTimeout(function() {
  self.a;
}, 1000);
setTimeout(() => {
  this.a;
}, 1000);
