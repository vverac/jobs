export const searchJob = async (tag) => {
  try {

    let url = `https://www.getonbrd.com/api/v0/tags/${tag}/jobs?per_page=2&page=1&expand=["company","tags"]`
    const res = await fetch(url)
    const data = await res.json()
    return data;
  } catch (error) {

  }
}

export const getJobs = async (endpoint) => {
  try {
    const api = 'https://www.getonbrd.com/api/v0'
    let url = `${api}/${endpoint}`
    const res = await fetch(url)
    //debugger
    const data = await res.json()
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getJobData = async (url) => {

  try {
    //let url = `https://www.getonbrd.com/api/v0/companies/${id}`
    // let url = `https://www.getonbrd.com/api/v0/companies?per_page=10&page=${page}`
    //let url = `https://www.getonbrd.com/api/v0/tags/${tag}/jobs?per_page=2&page=1&expand=["company","tags"]`
    const res = await fetch(url)
    const data = await res.json()
    return data;
  } catch (error) {

  }
}