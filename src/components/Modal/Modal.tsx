import "./Modal.less";
import Close from './../../assets/Close.png';
import CheckCyrcle from "./../../assets/CheckCyrcle.png"
interface IModal {
    onHide: any;
}

const Modal = ({ onHide }: IModal) => {
    return (
        <div className="modal">
            <div className="closeButton" onClick={onHide}>
                <img src={Close} alt="CloseButton" />
            </div>
            <div className="checkCyrcle">
                <img src={CheckCyrcle} alt="CloseButton" />
                <span className="text1">Аккаунт был успешно зарегистрирован</span>
                <span className="text2">На ваш E-mail отправлено письмо с ссылкой для подтверждения</span>
            </div>

        </div>
    )
}
export default Modal