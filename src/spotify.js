import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

function all() {
  return axios.get(url)
  .then(response => response)
  .catch(error => error)
}

async function doIt() {
  const response = await all()
  console.log(response)
}

doIt()