//callback function: a function passed as an arguments to another function. which is executed after an action is completed.
//generally it will be executed afer some specific task and that specific task will be called with the async call
//once the async task/call is completed the only callback function will be called.

//basic callback
function greet(name, callback){
    console.log("Hello " + name ); //normal/sync task/step, could be async call/api
    callback();
}

function welcome(){
    console.log("Welcome...!")
}

greet("john", welcome)
/*
outout: Hello john
Welcome...!
*/


//callback with async function
function printInfo(name, callback){
    //async function/task/step
    setTimeout(function(){
        console.log("printing info for " + name);
        callback("please call me back")
    },5000)  //delay for 5sec
}
function displayMsg(msg){
    console.log(msg)
}

printInfo("John", displayMsg)


//fetching user data
function fetchUserData(userId, callback){
    setTimeout(function(){
        const users ={
            1: {id:1, name :"John"},
            2: {id:2, name: "Smith"}
        };
        const user = users[userId]
        if(user){
            callback(null, user)

        }
        else{
            callback("User not foud", null)
        }
    },6000)
}

//callback function:
function handleUserData(error, user){
    if(error){
        console.log("Error : " , error)
    }
    else{
        console.log("user : " , user )
    }
}

fetchUserData(102, handleUserData)  //Error : User not foud
fetchUserData(1, handleUserData)  //user :  { id: 1, name: 'John' }

function performOperation(a,b, callback){
    console.log(a,b);
    let c = a+b;
    setTimeout(function(){
        callback(c)
    }, 8000)
}
function printResult(result){
    console.log(result)
};

performOperation(10,20,printResult)
