export default function Task({ task }) {
    return (
        <div>
            <span>{task.id}</span>
            {" : "}
            <span className="cursor-pointer">
                {task.title}
            </span>
        </div>
    )
}