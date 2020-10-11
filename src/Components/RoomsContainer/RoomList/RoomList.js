import React from 'react'
import Room from '../../Room/Room'
import './RoomList.css'
const RoomList = ({rooms}) =>{
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>Unfortunately No Rooms Matched Your Search Parameters</h3>
            </div>
        )
    }
    return(
        <section className="rooms-list">
            <div className="roomlist-center">
                {
                    rooms.map(item=>{
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
           
        </section>
    )
}

export default RoomList