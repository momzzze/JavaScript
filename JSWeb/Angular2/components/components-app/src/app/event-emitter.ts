type SubscriptionFn = (data: any) => void;

interface ISubscription {
  [eventName: string]: (SubscriptionFn)[];
}

class MyEventEmitter {
  subscriptions: ISubscription = {};

  subscribe(eventName: string, cb: SubscriptionFn) {
      this.subscriptions[eventName]=
    (this.subscriptions[eventName]||[]).concat(cb);
  }
  emit(eventName:string,data:any){
    (this.subscriptions[eventName]||[]).forEach((cb)=>cb(data));
  }
}


const eventEmitter=new MyEventEmitter();
eventEmitter.subscribe('connected', (data)=>console.log(data,'connected 1'));

eventEmitter.subscribe('connected', (data)=>console.log(data,'connected 2'));

setTimeout(()=>{
    eventEmitter.emit('connected',{a:'a',b:'b'});
},5000)