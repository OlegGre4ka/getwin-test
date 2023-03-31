import { useState } from "react";
import "./Registration.less";
import { Input } from "./../../../components/Input/Input";
import { InputPassword } from "./../../../components/InputPassword/InputPassword";
import Button from "./../../../components/Button/Button";

const Registration: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerFormSubmit = () => {
        console.log(email, password, confirmPassword, "email")
    }
    console.log(email, password, confirmPassword, "email")
    return (
        <>
            <div className="inputEmail">
                <Input label="E-mail"
                    changeEmailHandler={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} />
            </div>

            <div className="inputPass">
                <InputPassword label="Придумайте пароль" placeholder="Укажите ваш пароль" isKey={true}
                value={password}
                changePassHandler={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} 
                setGeneratePassHandler={setPassword} />
            </div>

            <div className="inputConfirmPass">
                <InputPassword label="Повторите пароль" placeholder="Повторите ваш пароль" 
                changePassHandler={(e: React.FormEvent<HTMLInputElement>) => setConfirmPassword(e.currentTarget.value)} />
            </div>

            <Button type="submit" clickHandler={registerFormSubmit}>Зарегиситрироваться</Button>

        </>

    )
}
export default Registration