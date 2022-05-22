const outfun=(a)=>{
    const b=25;
    const innfun=()=>{
        return a+b;
    }
    return innfun();
}
console.log(outfun(5));