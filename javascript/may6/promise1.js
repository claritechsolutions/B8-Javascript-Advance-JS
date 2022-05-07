let prom = (num) => {
    return new Promise(
        (res, rej) => {
            setTimeout(() => {
                if (num > 100) {
                    console.log("number is greater than 100");
                } else
                    console.log("number is less than 100");
            }, 2000)
        })
}
prom(101).then(prom).catch(prom);