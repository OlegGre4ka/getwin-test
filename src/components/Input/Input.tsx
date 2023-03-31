import { Input as InputAntd } from "antd"

export interface InputProps {
    label: string;
    changeEmailHandler:(e: React.FormEvent<HTMLInputElement> )=>void;
}

export function Input({ label, changeEmailHandler }: InputProps) {
    return (
        <div>
            <label>{label}</label>
            <InputAntd onChange={changeEmailHandler}/>
        </div>
    );
}

