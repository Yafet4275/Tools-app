import React, { useState, useEffect } from 'react';
import './Search.css'


export const Search = () => {
  //Set hooks
  const [ users, setUser ] = useState([])
  const [ search, setSearch ] = useState("")

  //Function to fetch data from API
  const URL = 'https://jsonplaceholder.typicode.com/users'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setUser(data)
  }

  useEffect( ()=> {
    showData()
  }, [])

  //find function
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  //filter method1
  // let results = []
  // if(!search) {
  //  results = users
  // }else{
  //   results = users.filter((dato) =>
  //     dato.name.toLowerCase().includes(search.toLocaleLowerCase())
  //   )
  // }

  // filter method2
  const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  console.log(results)

  //Render view
  return (
    <div>
      <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
      <table className='table table-striped table-hover mt-5 shadow-lg'>
        <thead>
          <tr className='bg-curso text-white'>
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
