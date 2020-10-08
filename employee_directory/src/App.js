import React, {useEffect, useState} from 'react';

import Header from "./components/Header";

import EmployeeList from "./components/EmployeeList";

import API from './utils/API'


function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState({users:[]});


  const handleSearch = (value) => {
    const filtered = users.filter(user => {
      return user.name.first.toLowerCase().includes(value) 
      || user.name.last.toLowerCase().includes(value)
      || user.email.toLowerCase().includes(value)
    });
    setFilteredUsers({users:filtered})
  }

  const handleSort = type => {
    if(type === "firstname"){
      //sort by first name
      const sorted = filteredUsers.users.sort((a,b)=> {
       return a.name.first < b.name.first ? -1 : a.name.first > b.name.first ? 1 : 0
      });
      setFilteredUsers({users:sorted})
    }
    if(type === "lastname"){
      //sort by last name
      const sortedLast = filteredUsers.users.sort((a,b) => {
        return a.name.last < b.name.last ? -1 : a.name.last > b.name.last ? 1 : 0;
      });
      setFilteredUsers({users:sortedLast})
    }
    if(type === "email"){
      // sort by email
      const sortedEmail = filteredUsers.users.sort((a,b) => {
        return a.email < b.email ? -1 : a.email > b.email ? 1 : 0;
      });
      setFilteredUsers({users:sortedEmail})
    }
  }

  //useEffect with no dependencies behaves EXACTLY like 
  //componentDidMount in a class component
  useEffect(() => {
    API.getEmployees()
    .then(({data})=> {
        console.log(data.results)
        setUsers(data.results);
        setFilteredUsers({users:data.results});
    })
}, [])

  return (
    <div>

    <Header search={handleSearch}/>

    <EmployeeList sort={handleSort} users={filteredUsers.users}/>
      
    
  </div>

  )

}

export default App;
