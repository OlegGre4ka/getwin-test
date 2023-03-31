import { useEffect, useState } from 'react';
import "./InputPassword.less";
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import Key from "./../../assets/Key.png";
import KeyActive from "./../../assets/KeyActive.png";
import Copy from "./../../assets/Copy.png";
import ReGenerate from "./../../assets/ReGenerate.png";

import { generatePassword } from "./../../helpers/generatePassword";

export interface InputPasswordProps {
    value?: string;
    placeholder: string;
    label: string;
    changePassHandler: (e: React.FormEvent<HTMLInputElement>) => void;
    isKey?: boolean;
    // setGeneratePassHandler?: (e: MouseEventHandler<HTMLDivElement>) => string;
    setGeneratePassHandler?: any;

}

export function InputPassword({ value, placeholder, label, changePassHandler, isKey, setGeneratePassHandler }: InputPasswordProps) {
    const [isGeneratePass, setIsGeneratePass] = useState(false);
    const [generatedPass, setGeneratedPass] = useState("");

    useEffect(
        () => {
            setGeneratedPass(generatePassword());
        }, []
    )
    console.log(generatedPass, "generatedPass")
    return (
        <>
            <label>{label}</label>
            <Input.Password
                value={value}
                placeholder={placeholder}
                onChange={changePassHandler}
            // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined 
            // />)}
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
                    <img className="copy" src={Copy} alt="Copy" />
                    <img className="reGenerate" src={ReGenerate} alt="ReGenerate" />
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
}

