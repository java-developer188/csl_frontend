export class Tournament {
    private id!: Number
    private name!: String
    private description!: String
    private status!: String
    
    set _id(value: Number){
        this.id=value;
    }
    get _id():Number{
        return this.id;
    }

    set _name(value: String){
        this.name = value;
    }
    get _name():String{
        return this.name;
    } 

    set _description(value:String){
        this.description=value;
    }
    get _description():String{
        return this.description;
    }

    set _status(value: String){
        this.status=value;
    }
    get _status():String{
        return this.status;
    }
}
