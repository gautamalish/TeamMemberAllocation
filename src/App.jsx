import { useState,useEffect } from 'react'
import React from "react"
import './App.css'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
import GroupedTeamMembers from './GroupedTeamMembers'
import NotFound from './NotFound'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Nav from './Nav'
function App() {
  const [selectedTeam,setSeelectedTeam]=React.useState(JSON.parse(localStorage.getItem("selectedTeam"))||"TeamB")
    const [employees,setEmployees]=React.useState(JSON.parse(localStorage.getItem("employees"))||[
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
    useEffect(()=>{
      localStorage.setItem("employees",JSON.stringify(employees))
    },[employees])
    useEffect(()=>{
      localStorage.setItem("selectedTeam",JSON.stringify(selectedTeam))
    },[selectedTeam])
    function handleTeamSelectionChange(event){
        setSeelectedTeam(event.target.value)
    }
    function handleEmployeeClick(event){
      const employeeId = parseInt(event.currentTarget.id);
        const transformedEmployees=employees.map(employee=>employee.id===employeeId?
        (employee.teamName==selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}:employee)
        setEmployees(transformedEmployees)
    }
  return (
    <div className='container'>
      <Router>
        <Nav/>
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter(emp=>emp.teamName==selectedTeam).length}
      />
      <Routes>
        <Route path='/'
          element={
            <Card handleEmployeeClick={handleEmployeeClick} handleTeamSelectionChange={handleTeamSelectionChange} 
            selectedTeam={selectedTeam} employees={employees}/>
          }>
      
      </Route>
      <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam}/>}/> 
      <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
