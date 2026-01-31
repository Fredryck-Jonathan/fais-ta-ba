function ModalMission(props){

    console.log(props.data, props.index, props.data[props.index])


    return(

        <div className={`modal-mission ${props.modalIsOpen ? "active" : ""}`}>



            <button className="modal-mission__button-return" onClick={(e) => {props.setModalIsOpen(false)}}>

                <ion-icon name="arrow-back-outline"></ion-icon>
                <p>Return</p>

            </button>

            <div className="modal-mission__first-part">

                <div className="modal-mission__bg">
                    <img src="https://picsum.photos/700/300" alt="" />
                </div>

                <div className="modal-mission__avatar">
                    <img src="https://picsum.photos/400/400" alt="" />
                </div>


                <div className="modal-mission__icon">

                </div>


                <p className="modal-mission__titre">Balade sur la digue de mer</p>

                
            </div>


            <div className="modal-mission__infos-mission">

                <div className="modal-mission__one-info">
                    <div></div>
                    <p>Andrée, 78 ans</p>
                </div>

                <div className="modal-mission__one-info">
                    <div></div>
                    <p>8 rue du Général de Gaulle</p>
                </div>

                <div className="modal-mission__one-info">
                    <div></div>
                    <p>1h</p>
                </div>

                <div className="modal-mission__one-info">
                    <div></div>
                    <p>+ 40 points</p>
                </div>

            </div>





        </div>


    )


}

export default ModalMission