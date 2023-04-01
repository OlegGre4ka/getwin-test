import { Input as InputAntd } from "antd";
import { Noop, RefCallBack } from "react-hook-form";
export interface InputProps {
    label: string;
    placeholder: string;
    changeEmailHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
    // register: any;
    // name: string;
    onBlur: Noop;
    onChange: (...event: any[])=>void;
    value: string;
    ref: RefCallBack;

}

const Input = ({ label, placeholder, /*name,  changeEmailHandler, register,*/
    onBlur, onChange, value, ref
}: InputProps) => {
    // console.log(register, "register")
    return (
        <div>
            <label>{label}</label>
            {/* <input type="text" placeholder="Email" {...register(name)}   /> */}
            <InputAntd
            onBlur={onBlur} onChange={onChange} value={value} ref={ref}
                // {...register(name)}
                // {...register}
                // onChange={register.onChange}
                // ref={register.ref}
                // name={name}
                placeholder={placeholder}
            // onChange={changeEmailHandler}
            />
        </div>
    );
}
export default Input

