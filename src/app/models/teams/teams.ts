import { Player } from "../player/player"

export class Team {
    id!: number 
    name!: String
    description!: String
    private status!: String


    public setID(id: number) : Team{
        this.id=id;
        return this;
    }

    public setName(name: String) : Team{
        this.name=name;
        return this;
    }

    public setStatus(status: String){
        this.status= status;
    }
}
