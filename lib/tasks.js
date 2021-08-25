import fetch from "node-fetch"

export async function getAllTasksData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const tasks = await response.json()
    return tasks;
}

export async function getAllTasksIds() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const tasks = await response.json()

    return tasks.map((task) => {
        return {
            params: {
                id: String(task.id)
            }
        }
    })
}

export async function getTaskData(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const task = await response.json()
    return {
        task
    }
}