import { useEffect, useState, memo, forwardRef, useRef } from 'react';
import "./InputPassword.less";
import { Tooltip } from "antd";
// import {InputPassword as InputPasswordAntd} from 'antd/lib/input/Password';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { Noop, RefCallBack } from "react-hook-form";
import Key from "./../../assets/Key.png";
import KeyActive from "./../../assets/KeyActive.png";
import Copy from "./../../assets/Copy.png";
import ReGenerate from "./../../assets/ReGenerate.png";
import { generatePassword } from "./../../helpers/generatePassword";

interface InputPasswordProps {
    value?: string;
    placeholder: string;
    label: string;
    isKey?: boolean;
    setGeneratePassHandler?: any;
    onBlur: Noop;
    onChange: (...event: any[]) => void;
    ref: RefCallBack;
    error?: any;

}
interface InputStyles {
    padding: string;
    border: string;
    borderRadius: string;
    position: any;
}
const InputPassword = memo(forwardRef(({ placeholder, label, isKey, setGeneratePassHandler,
    onBlur, onChange, value, error
}: InputPasswordProps, ref) => {
    const [isGeneratePass, setIsGeneratePass] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [generatedPass, setGeneratedPass] = useState("");

    const passwordInputRef = useRef<any>(null);

    useEffect(
        () => {
            setGeneratedPass(generatePassword());
        }, []
    )

    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
            setIsCopied(true);
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    const inputStyles: InputStyles = {
        padding: "8px 8px 8px 16px",
        border: error ? "2px solid #ff776f" : "2px solid #cbd5e2",
        borderRadius: "4px",
        position: "relative"
    }
    const inputFocused: InputStyles = {
        padding: "8px 8px 8px 16px",
        border: "2px solid #3843ed",
        borderRadius: "4px",
        position: "relative"
    };
    // console.log(generatedPass, error, "generatedPass-value");

    return (
        <div className="inputPassWrapper">
            <label>{label}</label>
            <Input.Password
                ref={passwordInputRef}
                style={isFocused ? inputFocused : inputStyles}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                onFocus={() => {
                    setIsFocused(true);
                    console.log("onFocus-true")
                }}
                onBlur={() => {
                    onBlur && onBlur()
                    setIsFocused(false);
                    console.log("onFocus-false")
                }}
            // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined 
            />
            {isKey &&
                <div className="keyWrapper">
                    {isGeneratePass ?
                        <div className="imgBox" onClick={() => {
                            setIsGeneratePass(!isGeneratePass);
                        }}><img className="imgActiveKey" src={KeyActive} alt="KeyActive" /></div>
                        : <div className="imgBox" onClick={() => {
                            setIsGeneratePass(!isGeneratePass);
                            passwordInputRef && passwordInputRef.current.focus();
                        }}><img className="imgKey" src={Key} alt="Key" /></div>}
                </div>
            }
            {isGeneratePass && <div className="generatePassDropdown" >
                <div className="option">
                    <span>{generatedPass}</span>
                    <div>
                        <Tooltip placement="topRight" title={isCopied ? "Copied!" : "Copy!"}>
                            <img className="copy" src={Copy} alt="Copy"
                                onClick={() => copyTextToClipboard(generatedPass)} />
                        </Tooltip>
                        <Tooltip placement="top" title="Generate new password">
                            <img className="reGenerate" src={ReGenerate} alt="ReGenerate"
                                onClick={() => {
                                    setGeneratedPass(generatePassword());
                                    setIsCopied(false);
                                }} />
                        </Tooltip>
                    </div>
                </div>
                <div className="option"
                    onClick={e => {
                        setGeneratePassHandler(generatedPass);
                        setIsGeneratePass(false);
                    }}>
                    <span>Применить сгенерированный пароль</span>
                </div>
            </div>}
        </div>


    );
}))

export default InputPassword

