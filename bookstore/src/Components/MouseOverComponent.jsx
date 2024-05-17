import React, { useState } from 'react';    
export default function MouseOverComponent() {
    const [isItinside, setIsItinside] = React.useState(false);

    const handleMouseEnter = () => {
        setIsItinside(true);
    }

    const handleMouseLeave = () => {
        setIsItinside(false);
    }


    return (
        <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            style={{ backgroundColor: isItinside ? 'blue': 'orange', padding:'20px' }}>
            <h1>Mouse Over Me!</h1>

        </div>
    );
}