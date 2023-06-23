/* eslint-disable react/prop-types */
// import React from 'react'

const Button = ({ content, padding }) => (
    <button 
        type="button" 
        className={`btn btn-light rounded-5 fw-bold ${padding ? padding : 'p-2'}`}
    >
        {content}
    </button>
)

export default Button