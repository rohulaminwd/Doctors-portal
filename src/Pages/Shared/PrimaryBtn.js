import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
            <button class="btn btn-primary font-bold text-white uppercase bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default PrimaryBtn;