var array=[1,2,3,4,5,6,7,8];
function test() {
    if(array.includes(7)){
        console.log("Boom");
    }
    else{
        console.log("7 is not in the list");
    }
}
test();