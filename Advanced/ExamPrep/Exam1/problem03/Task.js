class Task{
    constructor(title,deadline){
        this.title=title;
        this.deadline=deadline;
        this.status="Open";

    }
    get deadline(){
        return this._deadline
    }
    set deadline(value){
        if(value<Date.now()){
            throw new Error('Date cannot be in the past!')
        }
        this._deadline=value;
    }
    get isOverdue(){
        return this._deadline<Date.now()&&this.status!=='Complete'
    }

    static comparator(){

    }


    toString(){

    }
}