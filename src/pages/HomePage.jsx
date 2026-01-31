import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"



function Home() {
    
    const [connected, setConnected]= useState(false)
    
    useEffect(() => {





    }, [])

    
    return(

        <main className="home-page">

            { connected ? (

                <section>

                    

                </section>


            ) : (

                <div className="home-page__auth">

                        <NavLink to='/login'>Se Connecter</NavLink>
                        <NavLink to='/signin'>S'inscrire</NavLink>

                </div>


            )

            }




        </main>

    )
}

export default Home