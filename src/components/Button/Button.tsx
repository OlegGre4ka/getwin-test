import React from "react";
import "./Button.less";

interface ButtonProps{
    type?: 'button'| 'submit' | 'reset';
    clickHandler?: () => void;
    children: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ type, clickHandler, children, disabled = false }) => {
    const btnStyles = {
backgroundColor: ''
    }
    return (
        <button 
        className="button"
        type={type || 'button'} 
        onClick={clickHandler} 
        disabled={disabled}
        style={btnStyles}
        >
            {children}
        </button>
    );
};

export default Button;
