import { PlayerSkills } from "../player_skills/playerskills"
import { Team } from "../teams/teams"
import { Division } from "../division/division"

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
    division!: Division

}
