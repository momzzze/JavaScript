//Data Class

    class Request{
        constructor(method,uri,version,message){
            this.method=method;
            this.uri=uri;
            this.version=version;
            this.message=message;
            this.response=undefined;
            this.fulfilled=false;
        }
    }

function solve(arr,str) {
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }

    }

    let arrOfObj=[];
    for (let obj of arr) {
        let ticketString=obj.split('|');
        let ticket=new Ticket(ticketString[0],Number(ticketString[1]),ticketString[2]);
        arrOfObj.push(ticket);
    }

    if(str==='destination'){
        arrOfObj.sort(function (a,b) {
            if(a.destination<b.destination){
                return -1;
            }
            if(a.destination>b.destination){
                return 1;
            }
            return 0
        })
    }else if(str==='price'){
        arrOfObj.sort(function (a,b) {
            if(a.price<b.price){
                return -1;
            }
            if(a.price>b.price){
                return 1;
            }
            return 0
        })
    }else if(str==='status'){
        arrOfObj.sort(function (a,b) {
            if(a.status<b.status){
                return -1;
            }
            if(a.status>b.status){
                return 1;
            }
            return 0
        })
    }

    return arrOfObj;

}


/*console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));*/

//Length Limit
class Rat{
    constructor(name){
        this.name=name;
        this.arr=[];
    }
    unite(otherRat){
        if(this.constructor == otherRat.constructor){
            this.arr.push(otherRat)
        }
    }
     getRats(){
        return this.arr;
    }
    toString(){
        let res=this.name;
        for (let i = 0; i < this.arr.length; i++) {
                 res+='\n##'+this.arr[i].name;
        }
        return res;
    }
}


class Stringer{
    constructor(string,length){
        this.innerString=string;
        this.innerLength=length;
    }
    increase(innerLength){
        this.innerLength+=innerLength;
    }
    decrease(innerLength){
        this.innerLength-=innerLength;
        if(this.innerLength<0){
            this.innerLength=0;
        }
    }
    toString(){
        if(this.innerLength==0){
            return '...';
        }else {
            return this.innerString.substring(0,this.innerLength)+'...';
        }
    }

}

class Textbox{
    constructor(selector,regexInvalidSymbols){
        this.selector=selector;
        this._invalidSymbols=regexInvalidSymbols;
        this._elements=$(this.selector);
        $(this._elements).on('input',(e)=>{
            this._value=$(e.target).val()
            this.updateElements()
        })
    }
    updateElements(){
        for(let element of this._elements){
            $(element).val(this._value)
        }
    }
    get value(){
        return this._value;
    }
    set value(newValue){
        this._value=newValue;
        this.updateElements()
    }
    get elements(){
        return this._elements
    }
    isValid(){
        return !this._invalidSymbols.test(this._value);
    }
}
let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

//inputs.on('input',function(){console.log(textbox.value);});

class SortedList{
    constructor(){
        this.collection=[];
        this.size=0;
    }
    add(element){
        this.collection.push(element);
        this.size++;
        this.sort();
    }
    remove(index){
        if(index>=0&&index<this.collection.length){
            this.collection.splice(index,1);
            this.sort();
            this.size--;
        }else {
            throw  new Error;
        }
    }
    get(index){
        if(index>=0&&index<this.collection.length){
            return this.collection[index]
        }else {
            throw new Error;
        }
    }
    sort(){
        this.collection=this.collection.sort((a,b)=>a-b)
    }
}


class CheckingAccount{
    constructor(clientId,email,firstName,lastName){
        this.products=[];
        this.clientId=clientId;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get email(){
        return this._email
    }
    get clientId(){
        return this._clientId;
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set email(element){
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element))){
            throw new TypeError('Invalid e-mail')
        }
         this._email=element
    }
    set clientId(element){
        if(!/^[0-9]{6}$/.test(element)){
            throw new TypeError('Client ID must be a 6-digit number')
        }
        this._clientId=element;
    }
    set firstName(element){
        if(element.length<3||element.length>20){
            throw new TypeError('First name must be between 3 and 20 characters long')
        }
        if(!/^[a-zA-Z]+$/.test(element)){
            throw new TypeError('First name must contain only Latin characters')
        }
    }
    set lastName(element){
        if(element.length<3||element.length>20){
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        if(!/^[a-zA-Z]+$/.test(element)){
            throw new TypeError('Last name must contain only Latin characters')
        }
    }
}
