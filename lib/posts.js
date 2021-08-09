import axios from 'axios'

export async function getAllPostsData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        console.log(response)
    }).catch((error) => alert(error))
    return response
}