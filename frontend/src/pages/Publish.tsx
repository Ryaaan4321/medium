import { AppBar } from "../components/AppBar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"

export default function Publish() {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    return (
        <div>
            <AppBar />
            <div className="w-full">
                <div className="flex justify-center w-full pt-8">
                    <div className="max-w-screen-lg w-lg">
                        <input type="text" 
                        className="w-full py-3 px-4 rounded-lg text-sm focus:outline-none"
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}
                        placeholder="This is placeholder" />
                    </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                    <TextEditor onChange={(e)=>{
                        setContent(e.target.value)
                    }}/>
                </div>
                <div className="flex w-full justify-center mt-2">
                    <div className="">
                        <button
                            onClick={async() => {
                              await axios.post(`${BACKEND_URL}/blog/create`,{
                                title,
                                content
                              },{
                                headers:{
                                    Authorization:localStorage.getItem("token")
                                }
                              })
                            }}
                            type="button" className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Publish Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return (
        <div className="flex flex-col space-y-2 ">
            <div>
                <textarea id="message" 
                className="focus:outline-none w-lg block p-2.5 text-sm rounded-lg border border-gray-300"
                onChange={onChange}
                placeholder="Write your thoughts here..."></textarea>
            </div>

        </div>
    )
}