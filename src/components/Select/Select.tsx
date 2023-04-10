import { useState, forwardRef } from 'react';
import "./Select.less";
import ArrowSelectUp from "./../../assets/ArrowSelectUp.png";
import ArrowSelect from "./../../assets/ArrowSelect.png";
import { Select as SelectAntd } from 'antd';
import { Noop, RefCallBack } from "react-hook-form";
import { useAppDispatch } from "./../../hooks/reduxHooks";
import { setGenderId } from "../../redux/actions/profileActions";

interface SelectProps {
    label: string;
    inputName: string;
    placeholder: string;
    onBlur?: Noop;
    onChange?: any;
    value?: any;
    ref?: RefCallBack;
    disabled?: boolean | undefined;
    styles?: string;
    isLabelStar?: boolean | undefined;
    error?: any;
}

const Select = forwardRef(({ label, inputName, placeholder, isLabelStar, onBlur, onChange, value, error }: SelectProps, ref) => {
    const dispatch = useAppDispatch();

    const [isArrowIcon, setIsArrowIcon] = useState(false);

    return (
        <div className="selectWrapper">
            <label className="labelInput">{label}{isLabelStar && <span className="labelStar">*</span>}</label>
            <SelectAntd
                onDropdownVisibleChange={(open) => setIsArrowIcon(open)}
                placeholder={placeholder}
                suffixIcon={<img src={isArrowIcon ? ArrowSelectUp : ArrowSelect} alt="" />}
                style={{
                    border: error ? "2px solid #ff776f" : "2px solid #cbd5e2",
                    borderRadius: "4px",

                }}
                bordered={false}
                size={"large"}
                onBlur={onBlur}
                onChange={(val) => {
                    onChange(val);
                    inputName === "gender_id" && dispatch(setGenderId(val));
                }}
                value={value}
                options={[
                    { value: 1, label: 'Мужчина' },
                    { value: 2, label: 'Женщина' },
                    { value: 3, label: 'Другой' },
                ]}
            />
        </div>
    )
})

export default Select