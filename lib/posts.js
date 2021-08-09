import fetch from "node-fetch";

export async function getAllPostsData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json();
    return posts;
}