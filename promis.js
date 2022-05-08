
        function prom(test){
            return new Promise(function(conform,reject){
                setTimeout(() =>{
                    if(test){
                        conform('Ask me.')
                    }else{
                        reject('Dont ask me.')
                    }
                },3000  )
            });
        }
        let onconform = (result) => {
           console.log(result);
        }
        let onreject = (error) => {
            console.log(error);
        }
        prom(true).then(onconform).catch(onreject);
        
    

