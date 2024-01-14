import { useState } from "react";
export default function Twowaybinding(){
    const [product,setProduct]=useState({Name:'',Price:0,City:'',Stock:false})
     const [newProduct,setNewProduct]=useState({Name:'',Price:0,City:'',Stock:false})
    
          function handleNewProduct(){
            setNewProduct(product)
          }
            
            function handleName(e){
                setProduct({
                    Name:e.target.value,
                    Price:product.Price,
                    City:product.City,
                    Stock:product.Stock
                })
            }
            function handlePrice(e){
                setProduct({
                    Name:product.Name,
                    Price:e.target.value,
                    City:product.City,
                    Stock:product.Stock
                })
            }
            function handleCity(e){
                setProduct({
                    Name:product.Name,
                    Price:product.Price,
                    City:e.target.value,
                    Stock:product.Stock
                })
            }
            function handleStock(e){
                setProduct({
                    Name:product.Name,
                    Price:product.Price,
                    City:product.City,
                    Stock:e.target.checked
                })
            }

              
        return(
            <div className="container-fluid">
                <div className="row">
                   <div className="col-3">
                     <h2>Register form</h2>
                     <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleName} className="form-control"/></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={handlePrice} className="form-control"/></dd>
                        <dt>City</dt>
                        <dd>
                            <select className="form-select" onChange={handleCity}>
                                <option>Banglore</option>
                                <option>Hyderabad</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch"><input type="checkbox" className="form-check-input" onChange={handleStock}/>Available</dd>
                     </dl>
                     <button className="btn btn-primary w-100" onClick={handleNewProduct}>Register </button>
                   </div>
                   <div className="col-9">
                     <h2>Generating Form</h2>
                     <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                        <dl>Stock</dl>
                       <dd>{(newProduct.Stock==true)?"Available":"Out of stock"}</dd>
                     </dl>
                   </div>
                </div>
            </div>
        )

}
