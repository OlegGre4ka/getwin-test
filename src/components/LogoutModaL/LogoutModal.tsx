import "./LogoutModal.less";
import CloseLogoutIcon from './../../assets/CloseLogoutIcon.png';
import WarnIcon from "./../../assets/WarnIcon.png";
import { useNavigate } from 'react-router-dom';
import Button from "./../Button/Button";

interface ILogoutModal {
    onHide: any;
}

const LogoutModal = ({ onHide }: ILogoutModal) => {
    let navigate = useNavigate();

    return (
        <div className="logoutModal">

            <div className="content">
                <div className="closeButton" onClick={() => {
                    onHide();
                }}>
                    <img src={CloseLogoutIcon} alt="CloseButton" />
                </div>
                <img src={WarnIcon} alt="CloseButton" />
                <span className="text1">Подтверждение выхода из аккаунта</span>
                <span className="text2">Вы действительно хотите выйти из своей учетной записи?</span>
                <div className="primaryBtn">
                    <Button btnStyle="primary-216" clickHandler={() => onHide()}>Продолжить</Button>
                </div>
                <Button btnStyle="white-216" clickHandler={() => {
                    onHide();
                    navigate('/',  { state: { keyTab:"1" }});
                }}>Выйти</Button>
            </div>

        </div>
    )
}
export default LogoutModal