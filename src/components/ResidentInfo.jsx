import { useEffect, useState } from "react";
import Axios  from 'axios';
import axios from "axios";


const ResidentInfo = ({resident}) => {

const [character, setCharacter] = useState({})

useEffect(()=>{

axios.get(resident)
.then(res => setCharacter(res.data))

}, [])

console.log(character)


    return (

       
        <div className="card">

               {/* <li>{resident}</li> */}
               <h1>Nombre: {character?.name} </h1>
               <img className="avatar" src={character?.image} alt="" />
               <h3>Status: {character?.status} </h3>
               <h3>Lugar de Origen: {character.origin?.name} </h3>
               <h3>Cantidad Episodios: {character.episode?.length} </h3>
        </div>
        
    );
};

export default ResidentInfo;