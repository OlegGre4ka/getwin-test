import "./Modal.less";
import Close from './../../assets/Close.png';
import CheckCyrcle from "./../../assets/CheckCyrcle.png";
import { useNavigate } from 'react-router-dom';
interface IModal {
    onHide: any;
    text1: string;
    text2?: string;
}

const Modal = ({ onHide, text1, text2 }: IModal) => {
let navigate = useNavigate();

    return (
        <div className="modal">
            <div className="closeButton" onClick={() => {
                onHide();
                navigate('/profile');
            }}>
                <img src={Close} alt="CloseButton" />
            </div>
            <div className="checkCyrcle">
                <img src={CheckCyrcle} alt="CloseButton" />
                <span className="text1">{text1}</span>
                <span className="text2">{text2}</span>
            </div>

        </div>
    )
}
export default Modal