import React from 'react';
import { updateData } from '../Helpers/updateData';

export const Header = () => {

    const handleClick = () => {
        // updateData(0, "updateReset")
        //     .then(resp => {
                
        //     })
    }

    return (
        <header>
            <div className="header">
                <h1>Stanley Cortez</h1>
                <input type="button" value="Reset" onClick={handleClick}/>
            </div>
        </header>
    )
}