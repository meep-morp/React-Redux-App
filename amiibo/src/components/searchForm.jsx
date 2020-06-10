import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../actions/setData";


const SearchForm = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    return (
        <form onSubmit={event => {
            event.preventDefault();
            dispatch(getData(searchTerm))
        }}>
            <input
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
                type="text"
            />
        </form>
    )
}

export default SearchForm;