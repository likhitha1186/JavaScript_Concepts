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