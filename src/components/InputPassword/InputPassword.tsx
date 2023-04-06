import { useEffect, useState, memo, forwardRef} from 'react';
import "./InputPassword.less";
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
}
const InputPassword = memo(forwardRef(({ placeholder, label, isKey, setGeneratePassHandler,
    onBlur, onChange, value, error
}: InputPasswordProps, ref) => {
    const [isGeneratePass, setIsGeneratePass] = useState(false);
    const [generatedPass, setGeneratedPass] = useState("");

    useEffect(
        () => {
            setGeneratedPass(generatePassword());
        }, [isKey]
    )

    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    const inputStyles: InputStyles = {
        padding: "8px 8px 8px 16px",
        border: error ? "1px solid #ff776f" : "1px solid #cbd5e2"
    }

    return (
        <>
            <label>{label}</label>
            <Input.Password
                style={inputStyles}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                // ref={ref}
                placeholder={placeholder}
            // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined 
            />
            {isKey &&
                <div className="keyWrapper">
                    {isGeneratePass ?
                        <div className="imgBox" onClick={() => setIsGeneratePass(!isGeneratePass)}><img className="imgActiveKey" src={KeyActive} alt="KeyActive" /></div>
                        : <div className="imgBox" onClick={() => setIsGeneratePass(!isGeneratePass)}><img className="imgKey" src={Key} alt="Key" /></div>}
                </div>
            }
            {isGeneratePass && <div className="generatePassWrapper" >
                <div className="option">
                    <span>{generatedPass}</span>
                    <div>
                        <img className="copy" src={Copy} alt="Copy"
                            onClick={() => copyTextToClipboard(generatedPass)} />
                        <img className="reGenerate" src={ReGenerate} alt="ReGenerate"
                            onClick={() => setGeneratedPass(generatePassword())} />
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
        </>


    );
}))

export default InputPassword

