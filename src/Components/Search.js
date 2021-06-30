
import React from 'react';
import './Search.css'
import {useState, useEffect} from "react";

const Search = ({query, onSubmit}) => {
    const [text, setText]=useState(query);
    useEffect(()=>{
        music();
    },[]);

    const music =(e)=> {
        !!e && e.preventDefault();
        onSubmit (text);
    }
    return (
        <div className='search'>
            <form onSubmit={music}>
                <input
                    type="text"
                    placeholder='Search...'
                    onChange={e=> setText(e.target.value)}
                    value={text}
                />
                <button >Search</button>
            </form>
        </div>
    );
};
export default Search;