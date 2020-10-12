import React, { Component } from 'react'
import defaultBcg from '../../images/room-1.jpeg'
import StyledHero from '../Hero/StyledHero'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../RoomProvider'
import './SingleRoom.css'
class SingleRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    static contextType = RoomContext
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>No such Room could be found...</h3>
                <Link to="/rooms" className="btn-primary">Back to Room</Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        return (
            <>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="singular-room">
                    <div className="single-rooms-images">
                        {images.map((image, item) => {
                            return <img src={image} key={item} alt={name} />
                        })}
                    </div>

                    <div className="single-room-info">
                        <article className="single-room-text">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="single-room-text">
                            <h3>Info</h3>
                            <h4>Price: ${price}</h4>
                            <h4>Size: ${size} SQFT</h4>
                            <h4>Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h4>
                            <h4>Pets: {pets ? 'Pets Allowed' : 'No Pets Allowed'}</h4>
                            <h4>Breakfast: {breakfast && 'Free Breakfast Included'}</h4>
                        </article>
                    </div>
                </section>

                <section className="room-extras">
                    <h3>Extras</h3>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

export default SingleRoom