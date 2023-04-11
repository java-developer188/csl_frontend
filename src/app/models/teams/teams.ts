import { Player } from "../player/player"

export class Team {
    private id!: number 
    private name!: string
    private description!: string
    private status!: string


    set _id(value : number){
        this.id = value;
    }

    get _id(): number{
        return this.id;
    }

    set _description(value : string){
        this.description=value;
    }
    get _description() : string{
        return this.description;
    }

    set _name(value: string){
        this.name = value;
    }
    get _name(): string{
        return this.name;
    }

    set _status(value : string){
        this.status=value;
    }
    get _status():string{
        return this.status;
    }

}
