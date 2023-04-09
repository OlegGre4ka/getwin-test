import * as React from 'react';
import "./Error.less";
import ErrorCloseIcon from "./../../assets/ErrorCloseIcon.png";
import ErrorGreenIcon from "./../../assets/ErrorGreenIcon.png";


export interface IErrorProps {
    children: string | undefined;
    type?: string;
}

export default function Error({ children, type }: IErrorProps) {
    console.log(type, "type")
    return (
        <div className="errorBox">
            {type === "matches" ?
                <>
                    <img src={ErrorGreenIcon} alt="ErrorGreenIcon" />
                    <span className="warning">{children}</span>
                </>
                :
                <>
                    <img src={ErrorCloseIcon} alt="ErrorCloseIcon" />
                    <span className="error">{children}</span>
                </>}
        </div>
    );
}
