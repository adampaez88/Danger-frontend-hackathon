import React from "react";
import Card from "./Card";

function Container(props){


    const allAnimals = props.animals.map(animal => {
        return (
            <div className='animal-card'>
                <Card animal={animal} />
            </div>
        )
    })
    return(
        <div className="card-container">
            {allAnimals}
        </div>
    )
}

export default Container;