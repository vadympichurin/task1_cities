import React from 'react';
import './Cities.css';
import PropTypes from 'prop-types';

const Cities = ({cityInfo, delCity}) => {
    return (
        <div>
            <ul>
                {cityInfo.map(el =>
                    <li className="cityItem" id={el.id} key={el.id} onClick={delCity}>{el.name}</li>
                )}
            </ul>
        </div>

    )
};

Cities.propTypes = {
    cityInfo: PropTypes.array,
    delCity: PropTypes.func,
};

export default Cities;