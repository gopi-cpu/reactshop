import  {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './ishophome'
import Register from './ishopregister'
import Login from './ishoplogin'
import Dashboad from './ishopdashboad'
import Ishopproducts from './ishopproducts'
import Ishopproductdetails from './ishopproductdetails'
import Buynow from './buynow'

export default function Ishopp(){
    return(
        <div className="container-fluid">
           
            <header className="bg-danger text-center text-white mt-2 p-2">
                  <h1>React first project</h1>
            </header>
            <section className='mt-2 row'>
            <BrowserRouter>
            <nav className="col-3">
                <div className='bg-danger text-white text-center p-2 mt-2'>
                <Link to='/home' className='btn btn-danger w-100'>Home</Link>
                </div>
                <div className='bg-danger text-white text-center p-2 mt-2'>
                <Link to='/register' className='btn btn-danger w-100'>Register</Link>
                </div>
                <div className='bg-danger text-white text-center p-2 mt-2'>
                <Link to='/Login' className='btn btn-danger w-100' >Login</Link>
                </div>
                <div className='bg-danger text-white text-center p-2 mt-2'>
                <Link to='/dashboad' className='btn btn-danger w-100' >Dashboad</Link>
                </div>
            </nav>
            <main className="col-9">
        <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/Login' element={<Login />}/>
            <Route path='/dashboad' element={<Dashboad />}></Route>
            <Route path="products/:product" element={<Ishopproducts/>}   />

            <Route path="details/:id" element={<Ishopproductdetails />} />
            <Route path="buynow" element={<Buynow />}></Route>
            <Route path="/error" element={
                <div>
                    <h1>Error page</h1>
                </div>
            }/>
        </Routes>
            </main>
            </BrowserRouter>
            </section>
            
        </div>
    )
}