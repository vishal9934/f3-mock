

// Create a function called **`delayLog`** that takes two arguments: a string to log
// and a number representing the delay in milliseconds. The function should log the
// string to the console after the specified delay. For example, calling
// **`delayLog('Hello, world!', 2000)`** should log "Hello, world!" to the console after
// a 2-second delay


function delayLog(str,delay){
    setTimeout(()=>{
          console.log(str)
    },delay)
}
(delayLog("hello world",2000));