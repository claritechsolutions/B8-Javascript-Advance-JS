
const userLeft = false;
const userWatchingNetflix = false;

function watchNetflix(){
    return new Promise(function(resolve,reject){
        if(userLeft){
            resolve({
                action : 'user logged out',
                message : 'Hi i am not watching movie/series on netflix'
            })
        }
        else if(userWatchingNetflix){
            resolve({
                action : 'user log in',
                message : 'Hi i am watching movie on netflix'
            })
        }
        else{
            reject("Thumbs up and Subscribe")
        }
    })
}

watchNetflix().then((message) => {
    console.log(message.action + " " + message.message)
}).catch((error) =>{
    console.log(error)
})