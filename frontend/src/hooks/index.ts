import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';

export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
    }, [id])

    return {
        loading,
        blog
    }

}
//  axios.get(`${BACKEND_URL}/blog/${id}`, {
// drafts js to make rich editor
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
            console.log("response data from the hook", response.data)
            setBlogs(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    },[])
    console.log("blogs from the hook = ", blogs)
    return {
        loading,
        blogs
    }

}
// drafts js to make rich editor