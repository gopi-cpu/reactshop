import React from "react";

export default class Classcomponent extends React.Component{
    
    constructor(props){
       super(props)
        this.state={
            Name:'',
            Price:'',
           city :['banglore,hyderabad'],
           stock:false
           
        }
        this.handleName=this.handleName.bind(this)
        this.handlePrice=this.handlePrice.bind(this)
        this.handlecity=this.handlecity.bind(this)
        this.handlestock=this.handlestock.bind(this)
    }
                 

         handleName(e){
            this.setState({
                Name:e.target.value,
                Price:this.state.Price,
                city:this.state.city,
                stock:this.state.stock

            })
         }
        handlePrice(e){
            this.setState({
                Name:this.state.Name,
                Price:e.target.value,
                city:this.state.city,
                stock:this.state.stock
            })
        }
        handlecity(e){
           this.setState({
            Name:this.state.Name,
            Price:this.state.Price,
            city:e.target.value,
            stock:this.state.stock
           })
        }
           
        handlestock(e){
            this.setState({
                Name:this.state.Name,
                Price:this.state.Price,
                city:this.state.city,
                stock:e.target.checked
            })
        }
       
    render() {
      return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-3">
          <dl>
            <dt >Name</dt>
            <dd  ><input type="text" onChange={this.handleName} className="form-control"/></dd>
                <dt>Price</dt>
                <dd><input type="text" onChange={this.handlePrice} className="form-control"/></dd>
                <dt>City</dt>
                <dd>
                   <select onChange={this.handlecity} className="form-select">
                       <option>Banglore </option>
                      <option>Hyderabad</option>
                   </select>
                </dd>
                <dt>Stock</dt>
                <dd className="form-switch"><input type="checkbox" onChange={this.handlestock} className="form-check-input"/>Available</dd>
          </dl>
          <button className="btn btn-primary w-100" >Register</button>
          </div>
          <div className="col-9">
               <h2>Generating Form</h2>
               <dl>
                <dt>Name</dt>
                <dd>{this.state.Name}</dd>
                <dt>Price</dt>
                <dd>{this.state.Price}</dd>
                <dt>City</dt>
                <dd>{this.state.city}</dd>
                <dt>Stock</dt>
                <dd>
                    {(this.state.stock==true)?"available":"out of stock"}
                </dd>
               </dl>
          </div>
          </div>
        </div>
        
      )
    }

    


}