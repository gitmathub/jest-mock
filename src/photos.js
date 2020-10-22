import axios from 'axios'

export async function getPhotosByAlbumId(id) {
    const requestUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=3`
    return await axios.get(requestUrl)
        .then(response => response)
        .catch(error => error)
}
