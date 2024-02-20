import React from "react";
import UserContext from "../context/User";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormElement from "../components/FormElement";

function Signup(){
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);
    async function signup(formData){
        const name = formData.get("name")
        const email = formData.get("email");
        const password = formData.get("password");
        let newForm = new FormData();
        newForm.append(name);
        newForm.append(email);
        newForm.append(password);
        const savedUserResponse = await fetch("localhost:3001/Signup",
            {
                method:"POST",
                body:newForm
            }
        )
        const savedUser = savedUserResponse.json();
        if(savedUser){
            setUser(savedUser)
            navigate("/Agent");
        }
    }
    return (
        <div className="bg-blue-800 min-h-screen flex items-center justify-center">
            <form className="min-w-96 bg-white min-h-64 rounded-lg" action={signup}>
                <h3 className="text-lg font-semibold text-center mt-10">Create Account</h3>
                <div className="m-1 mt-10 px-5">
                    <FormElement name="name" field="Name" placeholder="abc" type="text" />
                    <FormElement name="email" field="Email" placeholder="example@abc.com" type="email" />
                    <FormElement name="password" field="Password" placeholder="" type="password" />
                    <input className="mt-5 mx-2" type="checkbox" name="remember"/>
                    <label>Remember me</label>
                    <button className="bg-blue-800 text-white p-2 my-5 rounded block w-full hover:bg-black">Sign up</button>
                    <div className="text-center mb-10">
                    <span >Already have an account? </span><a className="text-blue-900" href="/">Login</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;