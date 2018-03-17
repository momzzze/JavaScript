class Repository{
    constructor(props){
        this.props=props;
        this.data=new Map()
        this._id=0;
    }
    get count(){
        return this.data.size
    }
    add(entity){
        this._validate(entity)
        this.data.set(this._id,entity)
        return this._id++
    }
    get(id){
        this._validateId(id)
        return this.data.get(id)
    }
    update(id,newEntity){
        this._validateId(id)
        this._validate(newEntity)
        this.data.set(id,newEntity)
    }
    del(id){
        this._validateId(id)
        this.data.delete(id)
    }

    _validate(entity){
        for (let key in this.props) {

            if(this.props[key]!==typeof entity[key]){
                throw new TypeError(`Property ${entity[key]} is of incorrect type!`)
            }
        }
    }
    _validateId(id){
        if(!this.data.has(id)){
            throw new Error(`Property ${id} is missing from the entity!`)
        }
    }
}