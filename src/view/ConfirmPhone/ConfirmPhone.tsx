import Layout from "../../components/Layout/Layout";
import "./ConfirmPhone.less";
import ArrowLeft from "./../../assets/ArrowLeft.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useAppSelector } from "../../hooks/reduxHooks";

const ConfirmTelephone = () => {
    let navigate = useNavigate();

    return (
        <Layout isProfile={true}>
            <div className="confirmPhoneWrapper">

                <div className="confirmPhoneFormWrapper">
                    <h1 className="confirmPhoneTitle">Подтверждение телефона</h1>
                    <span className="confirmPhoneText">Мы отправили SMS с 6-значным кодом<br/> подтверждения на номер</span>
                    <form className="confirmPhoneForm">
                        <div className="confirmPhoneInput">
                            <Input label="SMS-код" placeholder="Укажите код"/>
                        </div>
                        <Button type="submit">Подтвердить</Button>
                    </form>
                </div>
                <div className="confirmButtonBlock" onClick={() => navigate("/profile")}>
                     {/* <div className="exit" onClick={() => navigate("/profile")}> */}
                        <img className="backIcon" src={ArrowLeft} alt="BackIcon" />
                        <span className="exitText">Назад</span>
                    {/* </div> */}
                </div>

            </div>
        </Layout>
    )
}
export default ConfirmTelephone


// const Profile = () => {
//     const email = useAppSelector(state => state.email.email);
