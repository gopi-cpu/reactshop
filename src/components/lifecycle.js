import React from "react"

    class SuccessComponent extends React.Component{
        componentDidMount(){
            alert('SuccessComponent is mouted')
        }
        componentWillUnmount(){
            alert('SuccessComponent is unmounted')
        }
        render(){
            return(
                <div>
                    <h2>Login Success</h2>
                </div>
            )
        }
    }
    class ErrorComponent extends React.Component{

        componentDidMount(){
            alert('ErrorComponent is mounting')
        }
        componentWillUnmount(){
            alert('ErrorComponent is Unmounting')
        }

        render(){
            return(
                <div>
                <h1>Error Login</h1>
            </div>
            )
        }
    }

export default class Lifecycle extends React.Component {

    constructor(props){
        super(props);
        this.state={
           UserDetails:{
            UserName:'John_123',
            Password:'John8328'
        },
        FormDetails:{
            UserName:'',
            Password:''
        },
        result:''
        }
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleLogin=this.handleLogin.bind(this)
    }
    handleUsername(event){
     this.setState({
        FormDetails:{
            UserName:event.target.value,
            Password:this.state.FormDetails.Password
        }
     })
    }

    handlePassword(event){
       this.setState({
        FormDetails:{
            UserName:this.state.FormDetails.UserName,
            Password:event.target.value
        }
       })
        }

        handleLogin(){
         if(this.state.FormDetails.UserName == this.state.UserDetails.UserName && this.state.FormDetails.Password == this.state.UserDetails.Password){
            this.setState({
                result:<SuccessComponent />
            })
         }
         else{
            this.setState({
                result: <ErrorComponent />
            })
         }
        }
    render(){
        return(
            <div>
               <dl>
                <dt>UserName</dt>
                <dd><input type="text" onChange={this.handleUsername} /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={this.handlePassword}/></dd>
               </dl>
               <button onClick={this.handleLogin}>Register</button>
               <div>
               <h2>{this.state.result}</h2>
               </div>
            </div>
        )
    }
}