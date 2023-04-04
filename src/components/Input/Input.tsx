import { Input as InputAntd } from "antd";
import { Noop, RefCallBack } from "react-hook-form";
import { Link } from "react-router-dom";
export interface InputProps {
    label: string;
    placeholder?: string;
    changeEmailHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: Noop;
    onChange?: (...event: any[]) => void;
    value?: string;
    ref?: RefCallBack;
    disabled?: boolean | undefined;
    styles?: string;
    isConfirmPhone?: boolean | undefined;
    isLabelStar?:boolean|undefined;

}

const Input = ({ label, placeholder, onBlur, onChange, value, ref, disabled, styles, isConfirmPhone, isLabelStar }: InputProps) => {
    const stylesLink: any = {
        display:"block",
        position: "relative",
        zIndex:100,
        color: "#4e5af2",
        fontSize: "12px",
        fontWeight: "600",
        marginLeft: "430px",
    }
    return (
        <>
            <label>{label}{isLabelStar&& <span style={{color:"#ff776f"}}>*</span>}</label>
            <InputAntd
                onBlur={onBlur}
                onChange={onChange}
                value={value} ref={ref}
                className={styles}
                placeholder={placeholder}
                disabled={disabled}
            />
            {isConfirmPhone &&
                <div className="linkWrapper" style={{marginTop:"-23px"}}>
                    <Link className="link" style={stylesLink} to="confirm-phone">Подтвердить телефон</Link>
                </div>}
        </>
    );
}
export default Input

