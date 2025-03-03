import { Link, useNavigate } from "react-router-dom";
// import { SignupInput, SigninInput } from '@fuccaryan/meidum-common'
import { ChangeEvent, useState } from "react";
import axios from 'axios';
import { BACKEND_URL } from "../config";
interface labelInput {
    label: string,
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}
// drafts js to make rich editor
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    async function setToken(token:any){
       if(!token){
        console.log("no token provided");
        return;
       }
       localStorage.setItem("token",`Bearer ${token}`);
       console.log("token inside the settoken function");
    }
    async function sendRequest() {
        console.log("Backend url = ", BACKEND_URL);
        try {
            const response = await axios.post(
                `${BACKEND_URL}/user/${type === "signup" ? 'signup' : 'signin'}`,
                postInputs
            );
            const jwt = response.data.jwt;
            if (jwt) {
                setToken(jwt);
                console.log(jwt);
                navigate('/blogs');
            } else {
                throw new Error("Token not received");
            }
        } catch (error) {
            alert("Error sending the POST request");
            console.error("Error:", error);
        }
    }
    return <div className="h-screen  flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="">
                <div className="px-10">
                    <div className="text-3xl font-extrabold ">
                        {type == "signup" ? "Create An Account" : "Already have an Account"}
                    </div>
                    <div className="text-slate-400 ">
                        {type === "signup" ? "Already have an account" : "Don't Have an Account"}
                        <Link
                            className="pl-2 underline"
                            to={type === "signup" ? "/signin" : "/signup"}
                        >
                            {type === "signup" ? "Login" : "Signup"}
                        </Link>
                    </div>
                    <div className="pt-10">
                        {type === "signup" ?
                            <LabeledInput
                                label="Name"
                                placeholder="Enter your name"
                                onchange={(e) => {
                                    setPostInputs({
                                        ...postInputs,
                                        name: e.target.value
                                    });
                                }}
                            />
                            : null}
                       { type==="signup"?<LabeledInput
                            label="Username"
                            placeholder="Enter your username"
                            onchange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    username: e.target.value
                                });
                            }}
                        />:null}
                        <LabeledInput
                            label="Email"
                            placeholder="Enter your email"
                            onchange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    email: e.target.value
                                });
                            }}
                        />
                        <LabeledInput
                            label="Password"
                            placeholder="Enter your password"
                            onchange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                });
                            }}
                            type={"password"}
                        />
                        <button onClick={sendRequest}
                            type="button" className="
                        w-full mt-2
                        text-white p bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-36 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
// drafts js to make rich editor

function LabeledInput({ label, placeholder, onchange, type }: labelInput) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
                {label}
            </label>
            <input
                onChange={onchange}
                type={type || "text"}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                            dark:border-gray-600 dark:placeholder-gray-400 
                           dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
// drafts js to make rich editor
// fix the zod schema everything else is fixed i think becuase of the zod schema you are putting the wrong
// input in the different fields and it is the reason why its is not gettign signup