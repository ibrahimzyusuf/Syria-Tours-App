
import React, { useRef, useState } from "react";
import "./searchBar.css";
import { Container, Row, Col } from "reactstrap";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom"; 

const Searchbar = () => {

    const titleRef = useRef("");
    const cityRef = useRef("");
    const sortRef = useRef("");
    const navigate = useNavigate()

    const SearchHandler = async() => {

    const title = titleRef.current.value
    const city = cityRef.current.value
    const sort = sortRef.current.value

    if (title === "" & city === "" & sort === "") {
        return alert("All fields are empty!")}
    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?title=${title}&city=${city}&sort=${sort}`)
    if (!res.ok) alert('something went wrong')

    const result = await res.json()
    navigate(`/tours/search?title=${title}&city=${city}&sort=${sort}`,
        { state: result.data }
        );
    };

    return (
        <Col lg="12">
            <div className="searchbar">
                <form className="d-flex align-items-center gap-4">
                    <formGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i class="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Name</h6>
                            <input type="text" ref={titleRef} placeholder="Title of the point"/>
                        </div>
                    </formGroup>

                    <formGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i class="ri-map-pin-2-line"></i></span>
                        <div>
                            <h6>City</h6>
                            <input type="text" ref={cityRef} placeholder="name of city"/>
                        </div>
                    </formGroup>

                    <formGroup className="d-flex gap-3 form__group form__group-last">
                        <span><i class="ri-building-line"></i></span>
                        <div>
                            <h6>Sort</h6>
                            <input type="text" placeholder="sort" ref={sortRef}/>
                        </div>
                    </formGroup>
                    <span className="search__icon" type="submit" onClick={SearchHandler}>
                        <i class="ri-search-line"></i>
                    </span>
                </form>
            </div>
        </Col>
    );
    };

    export default Searchbar