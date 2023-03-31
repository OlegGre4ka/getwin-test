import { useState } from 'react';
import "./InputPassword.less";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

export interface InputPasswordProps {
    placeholder: string;
    label: string;
    changePassHandler:(e: React.FormEvent<HTMLInputElement> )=>void;
}

export function InputPassword({ placeholder, label, changePassHandler }: InputPasswordProps) {
    // const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <>
            <label>{label}</label>
            <Input.Password
                placeholder={placeholder}
                onChange={changePassHandler}
                // iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined 
                // />)}
            />
        </>
        //   </Space>
        //  <Input.Password placeholder="input password" /> 

    );
}

