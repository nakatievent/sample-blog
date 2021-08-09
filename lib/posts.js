import fetch from "node-fetch";

export async function getAllPostsData() {
    const response = await fetch(
        new URL('https://jsonplaceholder.typicode.com/posts')
    );
    console.log(response)
    const posts = await response.json();
    return posts;
}