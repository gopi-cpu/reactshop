import { useState,useEffect } from "react"
import { useCookies } from "react-cookie"
import { useCaptcha } from "../hooks/useCaptcha"
export default function Cookie(){
const [cookie,setcookie,cookieremover]=useCookies(['Username'])
const data1 = useCaptcha()
const [Userdetails,setUserdetails]= useState({
    Username:'',
    Password:''
})

    function handleUsername(e){
        setUserdetails({
            Username:e.target.value,
            Password:Userdetails.Password
        })
    }

    function handlePassword(e){
        setUserdetails({
            Username:Userdetails.Username,
            Password:e.target.value
        })
    }

    function handlelogin(){
        setcookie("Username",Userdetails.Username)
        alert('Login Success')
    }

    function handlesinout(){
        cookieremover("Username");
        alert('coolie removed')
    }
    return(
        <div>
            <dl>
                <dt>Username</dt>
                <dd><input type="text" onChange={handleUsername}/></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePassword}/></dd>
                <dd>{data1.data}</dd>
            </dl>
            <button onClick={handlelogin}>Login</button>

            <hr></hr>
            <h2>Home {cookie.Username}</h2>
            <button onClick={handlesinout}>Sin out</button>
        </div>
    )
}