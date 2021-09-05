import fetch from "node-fetch";

export const getAllBlogPosts = async () => {
    const response  = await client.get({
        endpoint: 'posts',
    })
    const response2 = await client.get({
        endpoint: 'category',
    })
    return {
        props: {
            posts    : response.contents,
            categorys: response2.contents
        },
    };
};

export async function getAllPostsData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts;
}

export async function getAllPostsIds() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id)
            }
        }
    })
}

export async function getPostData(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()
    return {
        post
    }
}