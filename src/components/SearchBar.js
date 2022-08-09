import React, { useState } from 'react'
import { searchJob } from '../api.js'


const SearchBar = () => {

  const [search, setSearch] = useState('')
  const [job, setJob] = useState()

  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const onClick = async (e) => {
    const data = await searchJob(search)
    console.log(data)
    setJob(data)
  }

  return (
    <div className='searchbar-container'>
      <div className='searchbar'>
        <input
          placeholder='Buscar pagina...'
          onChange={onChange}
        />
      </div>

      <div className='searchbar-btn'>
        <button
          onClick={onClick}
        >
          Buscar
        </button>
      </div>

      <div>
        {job &&
          <div>
            <div>{job.map(item => item.id)}</div>

          </div>}
      </div>

    </div>
  )
}

export default SearchBar;