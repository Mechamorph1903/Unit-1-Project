import React from 'react';

const Vendor = (props) => {
    return (
        <td className={'Vendor ' + props.type}>
            <img src={props.imglink} className='vendorImg' alt={`${props.name} logo`} />
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
            <button>
                <a href={props.menu} target="_blank" rel="noopener noreferrer">More Info</a>
            </button>
        </td>
    );
};

export default Vendor;