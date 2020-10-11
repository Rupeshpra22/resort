import React from 'react'
import RoomFilter from './RoomFilter/RoomFilter'
import RoomList from './RoomList/RoomList'
import Loading from '../Loading/Loading'
import { withRoomConsumer } from '../RoomProvider'
const RoomsContainer = ({ context }) => {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomsContainer)

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import { RoomConsumer } from '../RoomProvider'
// import Loading from '../Loading/Loading'
// const RoomsContainer = () => {
//     return (
//         <>
//             <RoomConsumer>
//                 {
//                     (value) => {
//                         const { loading, sortedRooms, rooms } = value
//                         if (loading) {
//                             return <Loading />
//                         }
//                         return (
//                             <div>
//                                 Hello from Room Container
//                                 <RoomFilter rooms={rooms} />
//                                 <RoomList rooms={sortedRooms} />
//                             </div>
//                         )
//                     }
//                 }
//             </RoomConsumer>

//         </>
//     )
// }

// export default RoomsContainer