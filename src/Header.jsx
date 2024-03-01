export default function Header({teamMemberCount,selectedTeam}){
    return(
        <div>
            <h1 className="title">Team Member Allocation</h1>
            <h3 className="noOfMembers">{selectedTeam} has {teamMemberCount} members</h3>
        </div>
    )
}