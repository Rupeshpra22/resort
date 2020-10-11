import React, { Component } from 'react'
import items from '../data'

const RoomContext = React.createContext();
class RoomProvider extends Component{
    state={
       rooms:[],
       sortedRooms:[],
       featuredRooms:[],
       loading:true
    }

    //getdata
    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room=>room.featured === true);
        this.setState({
            rooms, //rooms:rooms both are same hence using es6 feature and just writing rooms
            featuredRooms,
            sortedRooms:rooms,
            loading:false
        })
    }

    formatData = (items) =>{
        let tempItems = items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image=>{
                return image.fields.file.url
            })
            let room = {...item.fields,images,id} //creating a room object with the fields object(copied) and then adding images and id 
            return room;
        })
        return tempItems
    }
    render(){
        return(
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children }
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer
export{RoomProvider, RoomConsumer, RoomContext} 