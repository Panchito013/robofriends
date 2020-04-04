import React from  'react';
import './Scroll.css';



const Scroll = (props) => {
    return (
        <div class="scrollable">
            {props.children}
        </div>

    );
};


export default Scroll;