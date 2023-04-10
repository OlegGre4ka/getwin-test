import { useState, forwardRef } from 'react';
import "./Input.less";
import { Input as InputAntd } from "antd";
import InputMask from 'react-input-mask';
import { Noop, RefCallBack } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./../../hooks/reduxHooks";
import { setName, setSName, setLName, setBirthDate, setPhone } from "../../redux/actions/profileActions";
import { phoneRegExp } from "./../../helpers/constants";

interface InputProps {
    label: string;
    placeholder?: string;
    changeEmailHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: Noop;
    onChange?: any;
    // onChange?: (...event: any[]) => void | undefined;
    inputName?: string;
    value?: any;
    ref?: RefCallBack;
    disabled?: boolean | undefined;
    styles?: string;
    isLabelStar?: boolean | undefined;
    error?: any;
    isInputMask?: boolean;
    mask?: string | any;
}

interface InputStyles {
    border: string;
    borderRadius: string;
}

const Input = forwardRef(({ label, placeholder, onBlur, onChange, inputName, value, disabled, styles, isLabelStar, error,
    isInputMask, mask }: InputProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const phone = useAppSelector(state => state.profile.phone);

    const dispatch = useAppDispatch();

    const inputStyles: InputStyles = {
        border: error ? "2px solid #ff776f" : "2px solid #cbd5e2",
        borderRadius: "4px"
    }
    const inputFocused: InputStyles = {
        border: "2px solid #3843ed",
        borderRadius: "4px"
    };
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
        <div className="flexDirectionColumn">
            <label className="labelInput">{label}{isLabelStar && <span className="labelStar">*</span>}</label>
            {isInputMask
                ? <InputMask
                    mask={mask}
                    onChange={(e) => {
                        onChange(e);
                        inputName === "phone" && dispatch(setPhone(e.target.value));
                        inputName === "birth_date" && dispatch(setBirthDate(e.target.value));
                    }}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    <InputAntd
                        style={isFocused ? inputFocused : inputStyles}
                        value={value}
                        className={styles}
                        placeholder={placeholder}
                        disabled={disabled}
                    />
                </InputMask>
                : <InputAntd
                    style={isFocused ? inputFocused : inputStyles}
                    onChange={(e) => {
                        onChange(e);
                        inputName === "name" && dispatch(setName(e.target.value));
                        inputName === "sname" && dispatch(setSName(e.target.value));
                        inputName === "lname" && dispatch(setLName(e.target.value));
                    }}
                    value={value}
                    className={styles}
                    placeholder={placeholder}
                    disabled={disabled}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />}

            {phoneRegExp.test(phone) && inputName === "phone" &&
                <div className="linkWrapper" >
                    <Link className="link" to="confirm-phone">Подтвердить телефон</Link>
                </div>}
        </div>
    );
})
export default Input

