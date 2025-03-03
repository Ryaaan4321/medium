import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="border-b  flex justify-between px-10 py-4">
        <Link to={'/blogs'}>
            <div className="flex flex-col justify-center">Medium</div>
        </Link>
        <div className="flex spce-x-2">
            <Link to={'/publish'}><button type="button" className="cursor-pointer text-white bg-green-700 mr-7 font-medium rounded-4xl text-sm px-5 py-2 me-2 mb-2 ">Publish</button></Link>
            
            <div><Avatar name="Aryan" size="big" /></div>
        </div>
    </div>
}

// drafts js to make rich editor