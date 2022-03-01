import React, { useState } from "react";
import { Link } from "react-router-dom";
import './topfold.css';

const TopFold = () => {
    const [query, setQuery] = useState("")
    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
    return(
        <div className="topfold">
            {window.location.pathname === '/' ? (<div className="home-topfold">
                <div className="search-bar">
                    <i className="fi fi-br-search"></i>
                    <input placeholder="Search for expenses." value={query} onChange={(e)=>handleQuery(e)} />
                </div>
                <Link to="/add-expense">
                    <div className="add-button">
                        <i className="fi fi-bs-add"></i>
                        <label>Add</label>
                    </div>
                </Link>
            </div>
            ): 
            (<div className="add-topfold">
                <Link to="/">
                    <div className="add-topfold-button">
                        <i className="fi fi-sr-angle-left"></i>
                        Back
                    </div>
                </Link>
                <Link to="/">
                    <div className="add-topfold-button">
                        <i className="fi fi-bs-cross-circle"></i>
                        Cancel
                    </div>
                </Link>

            </div>)}
            
        </div>
    )
}

export default TopFold;