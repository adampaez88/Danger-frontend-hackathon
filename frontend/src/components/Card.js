import React, {Component} from "react";

class Card extends Component{

    state = {
        isClicked: false
    }

    render(){
        const {isClicked} = this.state
        const {name, description, picture} = this.props.animal
        return(
            <>
                <img onClick={() => this.setState({isClicked: !isClicked})} src='snake.jpg' className='picture'/>
                {isClicked ? (
                <div className="info">
                    <p1 className="name">{name}</p1>
                    <p2 className="description">{description}</p2>
                </div>
                ) : null}
            </>
        )
    }
}

export default Card;