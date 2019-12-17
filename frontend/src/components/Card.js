import React, {Component} from "react";

class Card extends Component{

    state = {
        isClicked: false
    }

    render(){
        const {isClicked} = this.state
        const {name, description, photo, location, danger_level, picture} = this.props.animal
        return(
            <>
                <img onClick={() => this.setState({isClicked: !isClicked})} src={picture} className='picture'/>
                {isClicked ? (
                <div className="info">
                    <h1 className="name">{name}</h1>
                    <img className="photo" src={photo}/>
                    <p className="description">{description}</p>
                    <h4 className="danger-level">Danger level: {danger_level}</h4>
                    <p className="location">{location}</p>
                </div>
                ) : null}
            </>
        )
    }
}

export default Card;