import React, { Component } from 'react'
import items from '../data'

const RoomContext = React.createContext();
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakFast: false,
        pets: false
    }

    //getdata
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms, //rooms:rooms both are same hence using es6 feature and just writing rooms
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            type: 'all',
            capacity: 1,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => {
                return image.fields.file.url
            })
            let room = { ...item.fields, images, id } //creating a room object with the fields object(copied) and then adding images and id 
            return room;
        })
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    handleChange = event => {
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name;
        console.log(name);
        this.setState({
            [name]: value //here name will come based on the element, like for select tag we have name property set to type 
            //and hence we get name as type and then we are setting its value
        }, this.filterRooms);
        console.log(this.state)
    }

    filterRooms = () => {
        let {rooms,type,capacity, price} = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity)
        price = parseInt(price)

        if(type!=='all'){
            tempRooms = tempRooms.filter(room=>room.type === type);
        }

        if(capacity!==1){
            tempRooms = tempRooms.filter(room=>room.capacity >= capacity)
        }

        tempRooms = tempRooms.filter(room=>room.price <= price)
        this.setState({
            sortedRooms:tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        console.log(props)
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}
export { RoomProvider, RoomConsumer, RoomContext } 