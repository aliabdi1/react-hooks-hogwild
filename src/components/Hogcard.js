import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Hogcard({ hog }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        console.log('Card clicked, current state:', showDetails);
        setShowDetails(prevShowDetails => !prevShowDetails);
    };

    return (
        <div 
            className={`ui card ${showDetails ? 'show-details' : ''}`} 
            onClick={handleClick} 
            role="button" 
            tabIndex={0} 
            onKeyPress={(e) => e.key === 'Enter' && handleClick()}
            style={{ cursor: 'pointer' }}
        >
            <div className='image'>
                <img src={hog.image} alt={hog.name} />
            </div>
            
            <div className='content'> 
                <h4>{hog.name}</h4>
                <div className='details'>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                    <p>Highest Medal: {hog["highest medal achieved"]}</p>
                </div>
            </div>
        </div>
    );
}

// PropTypes for validation
Hogcard.propTypes = {
    hog: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        specialty: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired,
        greased: PropTypes.bool.isRequired,
        "highest medal achieved": PropTypes.string.isRequired,
    }).isRequired,
};

export default Hogcard;
