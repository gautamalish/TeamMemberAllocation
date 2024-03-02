import React from "react"
export default function GroupedTeamMembers({employees,selectedTeam,setSelectedTeam}){
    const [groupedEmployees,setGroupedEmployees]=React.useState(groupTeamMembers())
    function groupTeamMembers(){
        const teams=[]
        let teamAMembers=employees.filter((emp)=>emp.teamName=="TeamA")
        let teamA={team:"TeamA",members:teamAMembers,collapsed:selectedTeam=="TeamA"?false:true}
        teams.push(teamA)

        let teamBMembers=employees.filter((emp)=>emp.teamName=="TeamB")
        let teamB={team:"TeamB",members:teamBMembers,collapsed:selectedTeam=="TeamB"?false:true}
        teams.push(teamB)

        let teamCMembers=employees.filter((emp)=>emp.teamName=="TeamC")
        let teamC={team:"TeamC",members:teamCMembers,collapsed:selectedTeam=="TeamC"?false:true}
        teams.push(teamC)

        let teamDMembers=employees.filter((emp)=>emp.teamName=="TeamD")
        let teamD={team:"TeamD",members:teamDMembers,collapsed:selectedTeam=="TeamD"?false:true}
        teams.push(teamD)

        return teams

    }
    function handleClick(event){
        let transformedData=groupedEmployees.map((groupData)=>(
            groupData.team==event.currentTarget.id?
            {...groupData,collapsed:!groupData.collapsed}:groupData
        ))
        setGroupedEmployees(transformedData)
        setSelectedTeam(event.currentTarget.id)
    }
    return(
        <div>
            <h1 className="title">Grouped Team Members</h1>
            {groupedEmployees.map((item)=>(
                <div className="groupHolder">
                <div className="teamName" id={item.team} onClick={handleClick}>Team Name:{item.team}</div>
                {item.collapsed?null:(
                item.members.map((member)=>(
                    <div>
                    <h3>Fullname:{member.fullName}</h3>
                    <p>Designation:{member.designation}</p>
                    </div>
                )))}
                
                </div>
            ))
            }
            
        </div>
    )
}