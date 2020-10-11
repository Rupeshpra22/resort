import React, { Component } from 'react'
import { RoomContext } from '../RoomProvider'
import Loading from '../Loading/Loading'
import Room from '../Room/Room';
import Title from '../Title/Title';
import './FeaturedRooms.css'
class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let {featuredRooms:rooms,loading} = this.context;
        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        console.log(rooms)
        return (
            <section className="featured-rooms">
                <Title title="Featured Rooms"/>
                <div className="featured-room-center">
                    {loading? <Loading/> : rooms}
                </div>              
            </section>
        )
    }
}

export default FeaturedRooms