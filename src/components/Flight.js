import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { DatePicker } from 'antd';
import "./Flight.css"
import FlightCard from './FlightCard'


const { RangePicker } = DatePicker;
function Flight() {
  const [flights, setFlights] = useState([]);
  const [flights1, setFlights1] = useState([]);
  const [fromWhere, setFromWhere] = useState("");
  const [toWhere, setToWhere] = useState("");
  const [returndate, setReturndate] = useState();
  var data;
  const generateFlightCard = async () => {
    const list = await fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights ");
    data = await list.json();
    //setRooms(rooms => [data]);
    setFlights(data);
    setFlights1(data);
    console.log(flights);
 
  }

  const searchFlight = () => {
    let arr = flights1;
    if (fromWhere && toWhere && returndate) {
      arr = arr?.filter((e) => {
        return e.from.toLowerCase() === fromWhere.toLowerCase() && e.to.toLowerCase() === toWhere.toLowerCase() &&
          e.return.returnDate === returndate;

      })
    }
    setFlights(arr);
  }

  const onChange = (date) => {
    if (date) {
      setReturndate(date.format("YYYY-MM-DD"))
    }
  }


  useEffect(() => {
    generateFlightCard();
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div className="head1">
        <h1 className='head1h'>Compare and book flights with ease</h1>
        <p className='head1p'>Discover your next destination</p>
        <div className="row">
          <input type="text" className='input11' placeholder='From Where?' value={fromWhere} onChange={e => setFromWhere(e.target.value)} />
          <input type="text" className='input12' placeholder='To Where ?' value={toWhere} onChange={e => setToWhere(e.target.value)} />

          <DatePicker className='input13'placeholder='Return Date' onChange={onChange} />
          <Button className='searchbtn' onClick={searchFlight}>Search</Button>
        </div>
      </div>
      {flights && <h1 className='tickets'>Available Tickets</h1>}
      {flights && flights.map((e, index) => {
        return (
          <FlightCard from={e?.from} to={e?.to} airline={e?.airlineName} price={e.price} via={e.via[0] ? e.via[0] : "-"} departureTime={e.departure.departureTime} departureDate={e.departure.departureDate} duration={e.duration} returnTime={e.return.returnTime}
            returnDate={e.return.returnDate} key={index} />
        )
      })}

    </>
  )
}

export default Flight
