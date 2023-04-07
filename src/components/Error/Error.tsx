import * as React from 'react';
import "./Error.less";
import ErrorCloseIcon from "./../../assets/ErrorCloseIcon.png";

export interface IErrorProps {
    children: string | undefined;
    // children: JSX.Element;
}

export default function Error({ children }: IErrorProps) {
    return (
        <div className="errorBox">
            <img src={ErrorCloseIcon} alt="ErrorCloseIcon" />
            <span className="error">{children}</span>
        </div>
    );
}
