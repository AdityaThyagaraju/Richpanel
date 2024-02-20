import React from "react";
import { useContext } from "react";
import FormElement from "../components/FormElement";
import UserContext from "../context/User";
import { useNavigate } from "react-router-dom";

function Login(){
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();
    async function login(formData){
        const email = formData.get("email");
        const password = formData.get("password");
        let newForm = new FormData();
        newForm.append(email);
        newForm.append(password);
        const savedUserResponse = await fetch("localhost:3001/Login",
            {
                method:"POST",
                body:newForm
            }
        )
        const savedUser = savedUserResponse.json();
        if(savedUser){
            setUser(savedUser)
            navigate("/Agent")
        }
    }

    return (
        <div className="bg-blue-800 min-h-screen flex items-center justify-center">
            <form className="min-w-96 bg-white min-h-64 rounded-lg" action={login}>
                <h3 className="text-lg font-semibold text-center mt-10">Login to your account</h3>
                <div className="m-1 mt-10 px-5">
                    <FormElement name="email" field="Email" placeholder="example@abc.com" type="email" />
                    <FormElement name="password" field="Password" placeholder="" type="password" />
                    <input className="mt-5 mx-2" type="checkbox" name="remember"/>
                    <label>Remember me</label>
                    <button type="submit" className="bg-blue-800 text-white p-2 my-5 rounded block w-full hover:bg-black">Login</button>
                    <div className="text-center mb-10">
                    <span >New to MyApp? </span><a className="text-blue-900" href="/Signup">Sign up</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;