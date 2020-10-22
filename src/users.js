import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export function all() {
  return axios.get(url)
  .then(response => response)
  .catch(error => error)
}
