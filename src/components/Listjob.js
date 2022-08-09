import React from 'react'
import Jobcard from './Jobcard'

const Listjob = (props) => {
  console.log(props)
  const { jobs } = props

  return (
    <div>
      <div className='header'>
        <h1>Listado Ofertas</h1>
        <div>Paginacion</div>
      </div>
      <div className='job-grid'>
        {jobs.map((job, idx) => {
          return <Jobcard job={job} key={job.attributes.id} />

        })}

      </div>

    </div >

  )
}

export default Listjob;