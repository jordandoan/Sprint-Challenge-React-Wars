import React from "react";
import styled from "styled-components";
import axios from "axios";

const Character = (props) => {
let Card = styled.div`
    background-color:rgba(254, 183, 1, .6);
    width: 200px;
    height:500px;
    margin: 20px;
    padding: 10px;
`
let homeworld = axios.get(URL+)
    return(
        <Card>
            <h1>All about {props.info.name}!</h1>
            <p>Height: {props.info.height} cm</p>
            <p>Mass: {props.info.mass} kg</p>
            <p>Hair: {props.info.hair_color} </p>
            <p>Gender: {props.info.gender}</p>
        </Card>
    );
}

export default Character;