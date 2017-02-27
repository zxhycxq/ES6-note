/*
function* fibo() {
    let a = 1
    let b = 1

    yield a
    yield b

    while (true) {
        let next = a + b
        a = b
        b = next
        yield next
    }
}

let generator = fibo()

for (var i = 0; i < 10; i++)
    console.log(generator.next().value)



*/

function* aa(){
  var aaa=2;
  yield  ''
};
for (var i = 0, b =3; i < b; i++) {


}
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
/*
*
* { value: 'hello', done: false }
 { value: 'world', done: false }
 { value: 'ending', done: true }
 { value: undefined, done: true }
* */
// console.log('Hello' + (yield 123));
// console.log('Hello' + (yield));
