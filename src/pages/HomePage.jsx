import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import dataMission from "../data/data-mission";

import CardMission from "../components/CardMission";

import ModalMission from "../components/ModalMssion";

function Home() {
    
    const [connected, setConnected]= useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [missionSelected, setMissionSelected] = useState(0)


    useEffect(() => {


        console.log(dataMission)


    }, [])

    
    return(

        <main className="home-page">

            { connected ? (

                <div className="home-page__connect">

                    <div className="home-page__logo">
                        <h1>MIMO</h1>
                    </div>

                    <p className="home-page__hello">Bonjour Lucas ! </p>


                    <div className="home-page__dashboard">

                            <div className="home-page__dashboard-element">


                                    <div className="home-page__dashboard-element-content">
                                        <p>125</p>
                                        <p>points</p>    
                                        
                                    </div>

                            </div>

                            <div className="home-page__dashboard-element">

                                    <div className="home-page__dashboard-element-content">
                                        <p>Argent</p>
                                        <p>Badge</p>    
                                    </div>

                            </div>



                    </div>


                    <section className="home-page__missions-section">

                        <p className="home-page__missions-title">Missions près de toi</p>

                        <div className="home-page__missions-gallery">

                            {
                                dataMission.map((element, index ) => (

                                    <CardMission setModalIsOpen={setModalIsOpen} setMissionSelected={setMissionSelected} numberMission={index} key={index} data={element}></CardMission>

                                ))
                            }

                        </div>



                    </section>

                        
                            <ModalMission index={missionSelected} setModalIsOpen={setModalIsOpen} data={dataMission}  modalIsOpen={modalIsOpen}></ModalMission>


                </div>



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