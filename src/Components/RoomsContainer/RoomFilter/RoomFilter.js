import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../../RoomProvider'
import Title from '../../Title/Title';
import './RoomFilter.css'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))] //set only takes unique values
}

const RoomFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice } = context

    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Room Price : ${price}</label>
                    <input className="form-control" type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} />
                </div>
                
            </form>
        </section>
    )
}

export default RoomFilter