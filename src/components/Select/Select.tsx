import { useState, forwardRef } from 'react';
import "./Select.less";
import ArrowSelectUp from "./../../assets/ArrowSelectUp.png";
import ArrowSelect from "./../../assets/ArrowSelect.png";

import { Select as SelectAntd } from 'antd';
import { Noop, RefCallBack } from "react-hook-form";

interface SelectProps {
    label: string;
    placeholder: string;
    onBlur?: Noop;
    onChange?: (...event: any[]) => void;
    value?: any;
    ref?: RefCallBack;
    disabled?: boolean | undefined;
    styles?: string;
    isLabelStar?: boolean | undefined;
    error?: any;
}

const Select = forwardRef(({ label, placeholder, isLabelStar, onBlur, onChange, value }: SelectProps, ref) => {

    const [isArrowIcon, setIsArrowIcon] = useState(false);

    return (
        <div className="selectWrapper">
            <label className="labelInput">{label}{isLabelStar && <span className="labelStar">*</span>}</label>
            <SelectAntd
                onClick={() => setIsArrowIcon(!isArrowIcon)}
                placeholder={placeholder}
                suffixIcon={ <img src={isArrowIcon ? ArrowSelectUp : ArrowSelect} alt="" />}
                // style={{ width: 120 }}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                // ref={ref}
                options={[
                    { value: 1, label: 'Мужчина' },
                    { value: 2, label: 'Женщина' },
                    { value: 3, label: 'Другой' },
                    // { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
        </div>
    )
})

export default Select