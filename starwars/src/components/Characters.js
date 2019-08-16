import React,{useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Character = (props) => {
let Card = styled.div`
    background-color:rgba(254, 183, 1, .6);
    width: 200px;
    height:400px;
    margin: 20px;
    padding: 10px;
    text-align:left;
`
let H2 = styled.h2`
    display:block;
    height:50px;
    width:100%;
`
const [homeworld,setHome] = useState("homeless");
const [species,setSpecies] = useState();
const [firstFilm, setFirst] = useState();
useEffect(() => {
    axios.get(props.info.homeworld)
        .then(res => {setHome(res.data.name)});
    axios.get(props.info.species)
        .then(res => {setSpecies(res.data.name)});
    axios.get(props.info.films[0])
        .then(res => {setFirst(res.data.title)});
}, [])


    return(
        <Card className="character">
            <H2>All about {props.info.name}!</H2>
            <p>Height: {props.info.height} cm</p>
            <p>Mass: {props.info.mass} kg</p>
            <p>Species: {species}</p>
            <p>Hair: {props.info.hair_color} </p>
            <p>Homeplanet: {homeworld}</p>
            <p>Film: {firstFilm}</p>

        </Card>
    );
}

export default Character;