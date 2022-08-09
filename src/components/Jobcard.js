import React from 'react'

const Jobcard = (props) => {
  const { job } = props
  //console.log(job)

  return (
    <div className='job-card'>

      {job.attributes.map((job, idx) => {
        return (
          <div className='job-card'>
            <div className='job-img'>
              <img src={job.attributes.logo} alt={job.attributes.name} />
            </div>

            <div key={job.attributes.name}>
              {job.attributes.name}
            </div>

          </div>
        )
      })}

    </div>
  )
}

export default Jobcard