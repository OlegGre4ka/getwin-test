import {useState} from "react";
import "./Registration.less";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as API from "./../../../API/index";
import Input from "./../../../components/Input/Input";
import InputPassword from "./../../../components/InputPassword/InputPassword";
import Error from "./../../../components/Error/Error";
import Button from "./../../../components/Button/Button";
import Google from "./../../../assets/Google.png";
import Facebook from "./../../../assets/Facebook.png";
import Linkedin from "./../../../assets/Linkedin.png";

import { useAppDispatch } from "./../../../hooks/reduxHooks";
import { setEmailAction } from "../../../redux/actions/profileActions";

type FormValues = {
    email: string;
    password: string;
    confirmPassword?: string;
};

interface IRegistration {
    openModal: any;
}

const Registration = ({ openModal }: IRegistration) => {
    const dispatch = useAppDispatch();
    const [serverErrors, setServerErrors] = useState("");
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Некоректный емейл')
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Некоректный емейл')
            .required('Это поле должно быть заполнено'),
        password: Yup.string()
            .min(8, "Длина пароля должна быть не менее 8 и не более 14 символов.")
            .max(14, "Длина пароля должна быть не менее 8 и не более 14 символов.")
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,14}$/,
                'Пароль должен состоять из букв латинского алфавита (A-z), арабских цифр (0-9)'
            )
            .required('Это поле должно быть заполнено'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
            .required('Это поле должно быть заполнено')
    });

    const { control, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema)
    });

    const registerFormSubmit: SubmitHandler<FormValues> = async (data) => {
        delete data.confirmPassword;
        let Data = { ...data, ref: "http://example.com" };
        // const response = await API.postRegister(Data);
        dispatch(setEmailAction(data.email))
        // localStorage.setItem("user_token", response?.data?.user_data?.token);
        // console.log(Data, response?.data?.user_data?.token, response, "data-submit");
        // response.data.status === "success" ? openModal() : setServerErrors(response.data.msg);
        openModal()
        // console.log(response.data.msg, "errror-msg");
    };

    return (
        <>
           {serverErrors && <Error classes="serverErrors">{serverErrors}</Error>}
            {/* <Error classes="serverErrors">такой пользователь уже существует</Error> */}

            <form onSubmit={handleSubmit(registerFormSubmit)}>
                <div className="inputEmail">
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Input
                                label="E-mail"
                                placeholder="Email"
                                error={errors.email}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                ref={ref} />
                        )}
                    />

                    {errors.email && <Error>{errors.email.message}</Error>}
                </div>

                <div className="inputPass">
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <>
                                {console.log(value, "In Reg-InputPassword")}
                                <InputPassword
                                    label="Придумайте пароль"
                                    placeholder="Укажите ваш пароль"
                                    isKey={true}
                                    setGeneratePassHandler={(val: string) => {
                                        setValue("password", val, { shouldValidate: true });
                                        console.log(val, "val in Registration");
                                    }}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                    ref={ref}
                                    error={errors.password}
                                />
                            </>
                        )}
                    />
                    {errors.password && <Error type={errors.password.type}>{errors.password.message}</Error>}
                </div>

                <div className="inputConfirmPass">
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <InputPassword
                                label="Повторите пароль"
                                placeholder="Повторите ваш пароль"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                ref={ref}
                                error={errors.confirmPassword}
                            />
                        )}
                    />
                    {errors.confirmPassword && <Error>{errors.confirmPassword.message}</Error>}
                </div>

                <Button type="submit">Зарегистрироваться</Button>
            </form>
            <div className="socialTitleBlock">
                <span className="line"></span>
                <span className="socialMediaTitle">Или войдите с помощью</span>
                <span className="line"></span>
            </div>
            <div className="socialButtonsBlock">
                <Button btnStyle="socialBtn">
                    <img src={Google} alt="Google" />
                </Button>
                <Button btnStyle="socialBtn">
                    <img src={Facebook} alt="Google" />
                </Button>
                <Button btnStyle="socialBtn">
                    <img src={Linkedin} alt="Google" />
                </Button>
            </div>
        </>
    )
}
export default Registration