import { PlayerSkills } from "../player_skills/playerskills"
import { Team } from "../teams/teams"

export class Player {
    id!: number
    firstName!: String
    lastName!: String
    cnic!: number
    playerSkills!: PlayerSkills
    team!: Team
  myPlayer: any
    constructor(){
        this.playerSkills=new PlayerSkills();
        this.team=new Team();
        this.team.name="";
    }

}
