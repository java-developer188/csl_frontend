import { PlayerSkills } from "../player_skills/playerskills"
import { Team } from "../teams/teams"

export class Player {
    id!: number
    firstName!: String
    lastName!: String
    fatherName!: String
    age!: number
    status!: String
    isCaptain!:String
    playerSkills!: PlayerSkills
    team!: Team

    constructor(){
        this.playerSkills=new PlayerSkills();
        
        // this.team=new Team();
        // this.team.name="";
    }

}
