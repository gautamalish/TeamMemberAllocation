import React from "react"
import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"
export default function Card({handleEmployeeClick,handleTeamSelectionChange,selectedTeam,employees}){
    return(
        <div className="HeaderAndSelectContainer">
            <select name="" id="" className="selectTeam"  value={selectedTeam} onChange={handleTeamSelectionChange}>
                <option value="TeamA">TeamA</option>
                <option value="TeamB" >TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>
            </select>
        <div className="cardContainer">
            {employees.map(emp=>(
                <div key={emp.id} id={emp.id} className={emp.teamName==selectedTeam?"card selected":"card"} onClick={handleEmployeeClick}>
                {emp.gender=="male"?<img src={maleProfile} alt="" />:<img src={femaleProfile}/>}
                <h3>Name:{emp.fullName}</h3>
                <p style={{fontWeight:"bold"}}>Designation:<span style={{fontWeight:"normal"}}>{emp.designation}</span></p>
                </div>
            ))
            }
        </div>
        </div>
    )
}