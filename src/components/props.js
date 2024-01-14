import { useState } from "react"

export default function Props(){
   const [users,setusers]=useState([
    {UserId:'John'},
    {UserId:'John123'},
    {UserId:'John12345'}
   ])
const[usermsg,setusermsg]=useState('');
const[values , setvalues]=useState(false);
const[pwdmsg,setpwdmsg]=useState('');
const[citymsg,setcitymsg]=useState('')
 function VerifyUserId(e){
    for(var user of users){
        if(user.UserId==e.target.value){
            setusermsg('Not Available');
            setvalues(false)
            break;
        }
        else{
            setusermsg('Available');
            setvalues(true)
        }
    }
 }

  function textempty(e){
    if(e.target.value==""){
        setusermsg('Required')
    }
    else{
        setusermsg('')
    }
  }
      
  function pasw(e){
    if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
        setpwdmsg('Strong password')
    } else{
        if(e.target.value<4){
            setpwdmsg('poor password')
        }
        else{
            setpwdmsg('weak password');
        }
    }
  }
    
  function focus(){
    setpwdmsg('')
  }
      
      function Handlecity(e){
        if(e.target.value=="nocity"){
            setcitymsg('Please select city')
        }
        else{
            setcitymsg('')
        }
      }

    return(
        <div>
            <dt>Registration Form</dt>
            <dt>User Id</dt>
            <dd><input type="text" onKeyUp={VerifyUserId} onBlur={textempty}/></dd>
            <dd className={(values==true)?'text-success':'text-danger'}>{usermsg}</dd>
            <dt>Password</dt>
            <dd><input type="password" onKeyUp={pasw} onBlur={focus}/></dd>
            <dd>{pwdmsg}</dd>
            <dt>City</dt>
            <dd>
                <select onBlur={Handlecity}>
                    <option value="nocity">Select a city</option>
                    <option value="Andhra">Andhra</option>
                    <option value="hyderabad">hyderabad</option>
                </select>
            </dd>
            <dd className="text-danger">{citymsg}</dd>
        </div>
    )
}