import React, {Component} from "react";

class Card extends Component{

    state = {
        name: "",
        description: ""
    }

    render(){
        return(
            <>
                <p1 className="name">{this.props.animal.name}</p1>
                <p2 className="description">{this.props.animal.description}</p2>
            </>
        )
    }
}

export default Card;