import React, { useEffect, useState } from 'react';
import Card from './Card';
import { DatePicker } from 'antd';
import Button from 'react-bootstrap/Button';
import "./Stay.css"




function Stay() {
    const [rooms, setRooms] = useState([]);
    const [rooms1, setRooms1] = useState([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [city, setCity] = useState("");
    const [person, setPerson] = useState("");
    const [select, setSelect] = useState("Single");

    const { RangePicker } = DatePicker;
// eslint-disable-next-line
    const search = () => {
      
      
        let arr = rooms1;


        if (city && person && fromDate && toDate && select) {
            arr = arr?.filter((e) => {
                return e.city.toLowerCase() === city.toLowerCase() && Number(e.guests === "5-6" ? "6" : e.guests) >= Number(person) && e.check_in === fromDate && e.check_out === toDate && e.room_type.toLowerCase() === select.toLowerCase();
            })
        }
        setRooms(arr);
        console.log("search btn clicked")

    }

    const filterByDate = (dates) => {
        if (dates) {
            setFromDate(dates[0].format("YYYY-MM-DD"));
            setToDate(dates[1].format("YYYY-MM-DD"));
        }
    }

    const generate = async () => {
        const list = await fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels ");
        const data = await list.json();
        //setRooms(rooms => [data]);
        setRooms(data);
        setRooms1(data);
    }
    useEffect(() => {
        generate();
    }, [])

    return (
        <>
            <div className="box0">
                <div className="para">
                    <h1 className='parah1 h1'>Find your next stay</h1>
                    <p className='para_p'>Search deals on hotels,homes and much more...</p>
                </div>

                <div className="select1">
                    <label className='label1'>Room Type: </label>
                    <select onChange={e => setSelect(e.target.value)}>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="King">King</option>
                    </select>
                </div>
            </div>
            <div className="inputfield ">
                <div className="inputfield1">
                    <input className='input1' placeholder='Where are you going?' onChange={e => setCity(e.target.value)} value={city} />
                </div>
                <div className="inputfield2">

                    <RangePicker className='input2' onChange={filterByDate} />
                </div>
                <div className="inputfield3">

                    <input className='input3' placeholder='Number of Guests' onChange={e => setPerson(e.target.value)} value={person} />
                </div>

                <div className="inputfield4">
                    <Button className='inputfieldlogin' onClick={search}>Search</Button>
                </div>


            </div>

            {console.log(rooms)} {console.log("before")}
            {rooms && <h1 className='available'>Available Hotels</h1>}
            {
                rooms && rooms.map((e, index) => {

                    return (
                        <Card hotel_name={e.hotel_name} check_in={e.check_in} check_out={e.check_out} places={e.city} guest={e.guests}
                            rating={e.rating} room_type={e.room_type} prices={e.price_per_night} key={index} />
                    )
                })
            }
        </>
    )
}

export default Stay
