import { useState,useEffect } from "react";
export default function Nasa(){
const[mars,setMars] = useState([]);
const[products,setProduct]=useState([]);
const[cart,setCart]=useState([]);
const[itemsCount,setItemsCount]=useState(0);

function itemCount(){
    setItemsCount(cart.length)
    
}


function LoadCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data => {
        data.unshift('all');
       setMars(data);
    })
}

function Loadproduct(url){
    fetch(url)
    .then(response => response.json())
    .then(data=> {
        setProduct(data);
    })
}
         
          function handleapi(e){
            if(e.target.value=='all'){
                Loadproduct('https://fakestoreapi.com/products')
            }else
            Loadproduct(`https://fakestoreapi.com/products/category/${e.target.value}`)
          }

          function handleAddToCart(e){
              fetch(`https://fakestoreapi.com/products/${e.target.id}`)
              .then(response => response.json())
              .then(data =>{
                cart.push(data);
                itemCount();
          })}
          function handledelete(e){
            cart.pop(e.target.value);
            alert(cart.length);
          }

useEffect(() => {
    LoadCategories();
    Loadproduct('https://fakestoreapi.com/products');
},[cart.length])
return(
    <div className="container-fluid">
        <header className="bg-danger text-white text-center p-2">
            <h1><span className="bi bi-cart"></span>Shopping Home</h1>
        </header>
         <section className="row mt-3">
            <nav className="col-2">
                 <div>
                    <label>Select a category</label>
                    <div>
                        <select className="form-select" onChange={handleapi}>
                        {
                            mars.map(category =>
                              <option key={category}>{category}</option>  
                                )
                        }
                        </select>
                    </div>
                 </div>
            </nav>
            <main className="col-6 d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
                  {
                    products.map(product =>
                        <div key={product.id} className="card m-2 p-2 " style={{width:'200px'}}>
                            <img src={product.image} className="card-img-top" height="150"/>
                             <div className="card-header" style={{height:'160px'}}>
                              <p>{product.title}</p>
                             </div>
                             <div className="card-body">
                                 <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-succcess"></span>
                                            {product.rating.rate} <span>[{product.rating.count}]</span>
                                       
                                    </dd>
                                 </dl>
                                 </div>
                                 <div className="card-footer">
                                    <button id={product.id} onClick={handleAddToCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4"></span>
                                        Add to cart
                                    </button>
                                 </div>
                        </div>
                        )
                  }
            </main>
            <aside className="col-4">
                <button className="btn btn-danger w-100">
                    <span className="bi bi-cart3"></span> [{itemsCount}] Your items cart
                </button>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                          <tbody>
                            {
                                cart.map(item =>
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} width="50" height="50" />
                                        </td>
                                        <td>
                                            <button className="btn btn-danger"  onClick={handledelete}>
                                                <span className="bi bi-trash">

                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                            }
                          </tbody>
                </table>
            </aside>
         </section>
    </div>
   )      


}