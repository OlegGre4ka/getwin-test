import React from "react";
import "./Button.less";

interface ButtonProps{
    type?: 'button'| 'submit' | 'reset';
    clickHandler?: () => void;
    children: string;
    disabled?: boolean;
    btnStyle?: string;
};

const Button: React.FC<ButtonProps> = ({ type, clickHandler, children, disabled = false,btnStyle }) => {

    return (
        <button 
        className={btnStyle? btnStyle : "button"}
        type={type || 'button'} 
        onClick={clickHandler} 
        disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
