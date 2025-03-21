
import React from "react";
import "./counters.css";
import useFetch from '../../hooks/useFetch'
import {BASE_URL} from"../../utils/config"


const Counters = ()=>{

    const {data:bookingsCount}=useFetch(`${BASE_URL}/booking/search/getbookingsCount`);
    const {data:usersCount}=useFetch(`${BASE_URL}/users/search/getusersCount`); 
  
    return (
        <>
          <div className="counter__box">
            <span>{usersCount}</span>
            <h6>Users count</h6>
          </div>
            <div className="counter__box">
              <span>{bookingsCount}</span>
              <h6>Bookings count</h6>
            </div>
        </>
    );
  };
  
  export default Counters