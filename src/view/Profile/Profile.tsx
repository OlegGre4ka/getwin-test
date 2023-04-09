import Layout from "./../../components/Layout/Layout";
import "./Profile.less";
import BackIcon from "./../../assets/BackIcon.png";
// import { useNavigate } from "react-router-dom";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import Select from "./../../components/Select/Select";
import Error from "./../../components/Error/Error";
import * as API from "./../../API/index";
import Modal from "./../../components/Modal/Modal";
import LogoutModal from "./../../components/LogoutModaL/LogoutModal";
import useModal from "./../../hooks/useModal";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from "./../../hooks/reduxHooks";
import { setProfileAction } from "./../../redux/actions/emailAction";

type FormValues = {
    name: string;
    sname: string;
    lname?: string;
    birth_date: string;
    gender_id: number;
    phone: string;

};


const Profile = () => {
    // let navigate = useNavigate();
    const email = useAppSelector(state => state.profile.email);
    const dispatch = useAppDispatch();

    const [isModalOpen, openModal, closeModal]: any = useModal();
    const [isLogoutModalOpen, openLogoutModal, closeLogoutModal]: any = useModal();
    const now = new Date();


    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Ведите своё имя'),
        sname: Yup.string()
            .required('Введите свою фамилию'),
        birth_date: Yup.string()
            // .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Некоректний формат дати')
            .matches(
                /^(\d{2})\/(\d{2})\/(\d{4})$/,
                'Неверный формат даты. Введите дату в формате dd/mm/yyyy'
            )
            .test('valid-date', 'Введите коректную дату', (value: any) => {
                const currentYear = new Date().getFullYear();
                const minYear = currentYear - 100;
                const [day, month, year] = value.split('/').map((num: any) => parseInt(num));
                const date = new Date(year, month - 1, day);

                if (month > 12) {
                    return false;
                }

                if ([4, 6, 9, 11].includes(month) && day > 30) {
                    return false;
                }
                if ([1,3,5,7,8,10,12].includes(month) && day > 31) {
                    return false;
                }
                if (month === 2) {
                    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
                    if (isLeapYear && day > 29) {
                        return false;
                    } else if (!isLeapYear && day > 28) {
                        return false;
                    }
                }
                return date.getFullYear() >= minYear && date.getFullYear() <= currentYear;
            })
            // .test('valid-date', 'Введіть коректну дату', (value: any) => {
            //     const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
            //     const now = new Date();
            //     const maxDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            //     const minDate = new Date(now.getFullYear() - 100, now.getMonth(), now.getDate());

            //     if (!regex.test(value)) {
            //         return false;
            //     }

            //     const [day, month, year]: any = regex.exec(value);

            //     const date = new Date(year, month - 1, day);

            //     const isValidDate = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

            //     if (!isValidDate) {
            //         return false;
            //     }
            //     if (date > maxDate || date < minDate) {
            //         return false;
            //     }

            //     if (month > 12) {
            //         return false;
            //     }

            //     if ([4, 6, 9, 11].includes(month) && day > 30) {
            //         return false;
            //     }

            //     if (month === 2) {
            //         const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
            //         if (isLeapYear && day > 29) {
            //             return false;
            //         } else if (!isLeapYear && day > 28) {
            //             return false;
            //         }
            //     }

            //     return true;
            // })   
            .required('Введите дату своего рождения'),
        gender_id: Yup.number()
            .required('Выберите Ваш пол'),
        phone: Yup.string()
            .matches(/^\+38\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/, "Введите правильний номер телефона")
            .required("Введите номер телефона"),

    });

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema)
    });

    const createProfileSubmit: SubmitHandler<FormValues> = async (data) => {
        // let Data = { ...data, email };
        // const response = await API.postCreateProfile(data);
        dispatch(setProfileAction({ ...data, email }));
        // localStorage.setItem("user_token", "8ceb71a87b37b5371d749bb9eae06644");
        console.log({ ...data, email }, "data-submit");
        // response.data.status === "success" && openModal();
        openModal();
    };

    return (
        <>
            {!isLogoutModalOpen && <Layout isProfile={true}>

                <form className="profileWrapper" onSubmit={handleSubmit(createProfileSubmit)}>
                    <div className="profileForm">

                        <h1 className="profileTitle">Профиль пользователя</h1>
                        <div className="nameInputsBlock">

                            <div className="nameInput">
                                <Controller
                                    name="sname"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Input label="Фамилия" placeholder="Михайлов" isLabelStar={true} error={errors.sname}
                                            onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                    )}
                                />

                                {errors.sname && <Error>{errors.sname.message}</Error>}
                            </div>

                            <div className="nameInput">
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Input label="Имя" placeholder="Михаил" isLabelStar={true} error={errors.name}
                                            onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                    )}
                                />

                                {errors.name && <Error>{errors.name.message}</Error>}
                            </div>

                            <div className="nameInput">
                                <Controller
                                    name="lname"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Input label="Отчество" placeholder="Михайлович" error={errors.lname}
                                            onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                    )}
                                />

                                {errors.lname && <Error>{errors.lname.message}</Error>}
                            </div>
                        </div>
                        <div className="inputProfile">
                            <Controller
                                name="birth_date"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <Input label="Дата рождения" placeholder="10/08/1983" isLabelStar={true}
                                        mask="99/99/9999" isInputMask={true}
                                        error={errors.birth_date} onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                )}
                            />

                            {errors.birth_date && <Error>{errors.birth_date.message}</Error>}
                        </div>
                        <div className="inputProfile">
                            <Controller
                                name="gender_id"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <Select label="Пол" placeholder="Выберите пол" isLabelStar={true} error={errors.gender_id}
                                        onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                )}
                            />

                            {errors.gender_id && <Error>{errors.gender_id.message}</Error>}
                        </div>
                        <div className="inputProfile">
                            <Controller
                                name="phone"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <Input label="Телефон" placeholder="+38 (050) 725 60 09"
                                        mask="+38 (999) 999 99 99" isInputMask={true}
                                        isConfirmPhone={true} isLabelStar={true}
                                        error={errors.phone} onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                )}
                            />

                            {errors.phone && <Error>{errors.phone.message}</Error>}
                        </div>

                        <div className="inputProfile">
                            <Input label="E-mail" value={email} disabled={true} />
                        </div>
                    </div>
                    <div className="buttonBlock">
                        <div className="exit" onClick={() => openLogoutModal()}>
                            <img className="backIcon" src={BackIcon} alt="BackIcon" />
                            <span className="exitText">Выход</span>
                        </div>
                        <div>
                            <Button type="submit" btnStyle="primary">Далее</Button>
                        </div>
                    </div>
                </form>
            </Layout>}
            {isModalOpen && <Modal
                text1="Новый пользователь успешно создан и добавлен в базу данных"
                onHide={closeModal} />}

            {isLogoutModalOpen && <LogoutModal
                onHide={closeLogoutModal} />}
        </>
    )
}

export default Profile