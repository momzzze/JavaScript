const events = require("events");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("log", (message, data) => {
  console.log("message", message);
  console.log("data", data);
});


setTimeout(()=>{
    eventEmitter.emit('log','500 ms finished',500)
},500)
setTimeout(()=>{
    eventEmitter.emit('log','500 ms finished',2000)
},2000)
setTimeout(()=>{
    eventEmitter.emit('log','500 ms finished',1000)
},1000)