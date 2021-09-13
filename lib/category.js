import fetch from "node-fetch";
const { createClient } = require('microcms-js-sdk');

export const client = createClient({
    serviceDomain: 'engineer-blog', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: process.env.API_KEY,
});

export const getAllCategoryPosts = async () => {
    const posts = await client.get({
        endpoint: 'category',
    })
    return posts
};

export const getAllCategoryIds = async () => {
    const posts = await client.get({
        endpoint: 'category',
    })
    return posts.contents.map((post) => {
        return {
            params: {
                id: String(post.id)
            }
        }
    })
}

export async function getCategoryPostData(id) {
    const post = await client.get({
        endpoint: (`category/${id}`),
    })
    return {
        post
    }
}