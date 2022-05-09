//Example 1
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

//Example 2
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 100);
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
})