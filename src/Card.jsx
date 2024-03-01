import React from "react"
import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"
export default function Card(){
    const [selectedTeam,setSeelectedTeam]=React.useState("TeamB")
    const [employees,setEmployees]=React.useState([
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
          },
          {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
          },
          {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
          },
          {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
          },
          {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC"
          },
          {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC"
          },
          {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD"
          },
          {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD"
          }
    ])
    function handleTeamSelectionChange(event){
        setSeelectedTeam(event.target.value)
        console.log(event.target.value)
    }
    function handleEmployeeClick(event){
      const employeeId = parseInt(event.currentTarget.id);
        const transformedEmployees=employees.map(employee=>employee.id===employeeId?
        (employee.teamName==selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}:employee)
        setEmployees(transformedEmployees)
    }
    return(
        <div className="HeaderAndSelectContainer">
            <select name="" id="" className="selectTeam" onChange={handleTeamSelectionChange}>
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>
            </select>
        <div className="cardContainer">
            {employees.map(emp=>(
                <div key={emp.id} id={emp.id} className={emp.teamName==selectedTeam?"card selected":"card"} onClick={handleEmployeeClick}>
                {emp.gender=="male"?<img src={maleProfile} alt="" />:<img src={femaleProfile}/>}
                <h3>Name:{emp.fullName}</h3>
                <p style={{fontWeight:"bold"}}>Designation:<span style={{fontWeight:"normal"}}>{emp.designation}</span></p>
                {console.log(emp.fullName,emp.teamName)}
                </div>
            ))
            }
        </div>
        </div>
    )
}