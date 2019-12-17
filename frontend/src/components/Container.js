import React from "react";
import Card from "./Card";

function Container(props){

    const allAnimals = props.animals.map(animal => {
        return (
            <div className="animal-card">
                <Card animal={animal} />
            </div>
        )
    })
    return(
        <>
            {allAnimals}
        </>
    )
}

export default Container;