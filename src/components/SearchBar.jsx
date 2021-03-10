import React, { useState } from 'react';
import "../style/SearchBar.css";

const SearchBar = (props) => {

    const [input, setInput] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        //make a callback from the parent component.
        props.onFormSubmit(input);
        console.log(input);
    };

    return(
        <div className="searchBar">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <input type="text" placeholder="Search" value={input} className="input" onChange={e => setInput(e.target.value)}/>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;