import React from "react";
import "./Button.less";

type ButtonProps = {
    type?: string;
    clickHandler: () => void;
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
        type={'button' || type} 
        onClick={clickHandler} 
        disabled={disabled}
        style={btnStyles}
        >
            {children}
        </button>
    );
};

export default Button;
