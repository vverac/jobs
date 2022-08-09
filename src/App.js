import './app.css'
import Listjob from './components/Listjob';
import SearchBar from './components/SearchBar';

import { useState, useEffect } from 'react';
import { getJobs, getJobData } from './api';

function App() {
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    try {
      const datajobs = await getJobs('categories/programming/jobs?per_page=10&page=1')

      // const res = await datas.json()
      console.log(datajobs)
      // setJobs(datajobs.data)
      const promises = datajobs.data.map(async (job) => {
        setTimeout(async () => {
          return await getJobs(`seniorities/${job.attributes.seniority.data.id}`)
        }, 500)
      })

      const data = await Promise.all(promises)
      console.log(data)
      //setJobs(data)
    } catch (error) {

    }
  }

  useEffect(() => {
    // console.log('inside useEffect')
    fetchJobs()
  }, [])

  return (
    <div>
      <div className="App">
        <div>
          <SearchBar />
          {/* <Listjob jobs={jobs} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
