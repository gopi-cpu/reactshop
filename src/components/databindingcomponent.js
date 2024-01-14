
export default function databinding(){
var products = [
    {name:'fridge',price:23,stock:'true', color:'blue'},
    {name:'washing machine',price:83,stock:'false',color:'red'},
    {name:'AC',price:78,stock:'true',color:'white'}
]
        return(
           <div>
            <h2>Products</h2>
            <table className="table table-hover">
               <thead>
                 <tr>
                    <th>Name</th>
                    <th>price</th>
                    <th>Stock</th>
                    <th>Color</th>
                 </tr>
               </thead>
               <tbody>
                {
                    products.map(product =>
                      <tr>
                        <th>{product.name}</th>
                        <th>{product.price}</th>
                        <th>{product.stock}</th>
                        <th>{product.color}</th>
                      </tr>  
                        )
                }
               </tbody>


            </table>
           </div>
        )

}
  