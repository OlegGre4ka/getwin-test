import { useState, forwardRef } from 'react';
import "./Input.less";
import { Input as InputAntd } from "antd";
import InputMask from 'react-input-mask';

import { Noop, RefCallBack } from "react-hook-form";
import { Link } from "react-router-dom";
import FlexBox from '../FlexBox/FlexBox';

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
    isInputMask?: boolean;
    mask?: string | any;
}

interface InputStyles {
    // padding: string;
    border: string;
    borderRadius: string;
}

const Input = forwardRef(({ label, placeholder, onBlur, onChange, value, disabled, styles, isConfirmPhone, isLabelStar, error,
    isInputMask, mask }: InputProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const inputStyles: InputStyles = {
        // padding: "6px 8px 6px 16px",
        border: error ? "2px solid #ff776f" : "2px solid #cbd5e2",
        borderRadius: "4px"
    }
    const inputFocused: InputStyles = {
        border: "2px solid #3843ed",
        borderRadius: "4px"
    };
    console.log(isFocused, "isFocused")
    const handleFocus = (e: any) => {
        setIsFocused(true);
        console.log(e, "onFocus-true")
    };

    const handleBlur = (e: any) => {
        onBlur && onBlur();
        setIsFocused(false);
        console.log(e, "blur")
    };
    return (
        <FlexBox flexStyles="flexDirectionColumn">
            <label className="labelInput">{label}{isLabelStar && <span className="labelStar">*</span>}</label>
            {isInputMask
                ? <InputMask
                    mask={mask}
                    onChange={onChange}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    <InputAntd
                        style={isFocused ? inputFocused : inputStyles}
                        onChange={onChange}
                        value={value}
                        className={styles}
                        placeholder={placeholder}
                        disabled={disabled}
                    />
                </InputMask>
                : <InputAntd
                    style={isFocused ? inputFocused : inputStyles}
                    onChange={onChange}
                    value={value}
                    className={styles}
                    placeholder={placeholder}
                    disabled={disabled}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />}

            {isConfirmPhone &&
                <div className="linkWrapper" >
                    <Link className="link" to="confirm-phone">Подтвердить телефон</Link>
                </div>}
        </FlexBox>
    );
})
export default Input

