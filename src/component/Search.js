import axios from 'axios';
import React, { useState } from 'react';
import '../Style/style.css'
import UserList from './UserList';


const GithubUserHandler = () => {
    const [search,setSearch] = useState()
    const [data,setData] = useState()
    const [error,setError] = useState()

    const searchHandler = () => {
        axios.get(`https://api.github.com/users/${search}/repos`)
        .then((res) => {
            console.log(res)
            setData(res && res.data)
            setError('')
        })
        .catch((err) => {
            console.log(err) 
            setData('')
            setError(err)

        })
    }

return (
    <React.Fragment>
        <div className='search-wrapper'>
        <label className="user_label">Enter Github User Name: </label>
        <input type="text" className='search_box' placeholder='Seach by username' value={search} onChange={(e) => setSearch(e.target.value) }/>
        <button type="submit" onClick={searchHandler} className="submit-btn">Submit</button>
        </div>
        <UserList data={data} error={error} />
    </React.Fragment>
)
}

export default GithubUserHandler;