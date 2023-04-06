import {forwardRef} from 'react';
import "./Input.less";
import { Input as InputAntd } from "antd";
import { Noop, RefCallBack } from "react-hook-form";
import { Link } from "react-router-dom";

interface InputProps {
    label: string;
    placeholder?: string;
    changeEmailHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: Noop;
    onChange?: (...event: any[]) => void;
    value?: any;
    // value?: string | undefined;
    ref?: RefCallBack;
    disabled?: boolean | undefined;
    styles?: string;
    isConfirmPhone?: boolean | undefined;
    isLabelStar?: boolean | undefined;
    error?: any;

}

interface InputStyles {
    padding: string;
    border: string;
}

const Input = forwardRef(({ label, placeholder, onBlur, onChange, value, disabled, styles, isConfirmPhone, isLabelStar, error }: InputProps, ref) => {
    const inputStyles: InputStyles = {
        padding: "8px 8px 8px 16px",
        border: error ? "1px solid #ff776f" : "1px solid #cbd5e2"
    }
    return (
        <>
            <label className="labelInput">{label}{isLabelStar && <span className="labelStar">*</span>}</label>
            <InputAntd
                style={inputStyles}
                onBlur={onBlur}
                onChange={onChange}
                value={value} 
                // ref={ref}
                className={styles}
                placeholder={placeholder}
                disabled={disabled}
            />
            {isConfirmPhone &&
                <div className="linkWrapper" >
                    <Link className="link" to="confirm-phone">Подтвердить телефон</Link>
                </div>}
        </>
    );
})
export default Input

