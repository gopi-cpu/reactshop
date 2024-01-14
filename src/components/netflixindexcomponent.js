import Netflixheadercomponent from "./netflixheadercomponent"
import Netflixmaincomponent from "./netflixmaincomponent"
import Netflixregistercomponent from "./netflixreistercomponent"
export default function Netflixindexcomponent(){
    return(
        <div className="container-fluid">
            <div className="box">
            <header>
            <Netflixheadercomponent />
            </header>
            <section className="d-flex justify-content-center align-items-center">
                <main>
                    <Netflixmaincomponent />
                    <Netflixregistercomponent />
                   
                </main>
            </section>
            </div>
        </div>
    )
}