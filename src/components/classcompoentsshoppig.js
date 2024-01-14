import React from "react";

export default class Shopping extends React.Component{
   constructor(props){
     super(props)
     this.state={
    categories : [],
    products : [],
    cartItems:[]
        }
       this.handlefilter=this.handlefilter.bind(this)
   }
          
          handlecategories(){
            fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => 
                
                {
                    data.unshift('all');
                this.setState({
                    
                    categories:data
                })
            })
          }
          handleproducts(url){
            fetch(url)
            .then(response=> response.json())
            .then(data => {
                this.setState({
                    products:data
                })
            })
          }
          handlefilter(e){
            
            this.handleproducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
          }
                    
          componentDidMount(){
            this.handlecategories();
            this.handleproducts('https://fakestoreapi.com/products');
            
          }
           
   render(){
    return(
       <div className="container-fluid">
           <header className="bg-danger text-white text-center p-2">
          <h1><span className="bi bi-cart"></span>shopping home</h1>
           </header>
           <section className="row mt-3">
            <nav className="col-2">
                <div>
                    <label>Select a category</label>
                </div>
                <div>
                    <select className="form-select" onChange={this.handlefilter}>
                        {
                            this.state.categories.map(category =>
                              <option>{category}</option>  
                                )
                        }
                    </select>
                </div>
            </nav>
            <main className="col-6 d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
                {
                    this.state.products.map(product =>
                        <div className="card m-2 p-2" style={{width:'200px'}}>
                   <img src={product.image} className="card-img-top" height="150px"/>
                   <div className="card-header" style={{height:'160px'}}>
                    <p>{product.title}</p>
                   </div>
                   <div className="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Rating</dt>
                        <dd><span className="bi bi-star-fill text-success"></span>
                        {product.rating.rate} <span>[{product.rating.count}]</span>
                        </dd>
                    </dl>
                   </div>
                   <div  className="card-footer">
                    <button className="btn btn-danger w-100" >
                    <span className="bi bi-cart3"></span>  Add to cart
                    </button>
                   </div>
                        </div>
                        )
                }
            </main>
            <aside className="col-4 ">
                 <button className="btn btn-danger w-100">
                    <span className="bi bi-cart3"></span>[]
                    Your cart items </button>
                    <table className="tabel table-hover">
                       <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Preview</th>
                        </tr>
                       </thead>
                       <tbody>
                        
                       </tbody>
                    </table>
            </aside>
           </section>
       </div>

    )
   }

}