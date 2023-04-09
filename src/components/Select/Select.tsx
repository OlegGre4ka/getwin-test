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

const Select = forwardRef(({ label, placeholder, isLabelStar, onBlur, onChange, value, error }: SelectProps, ref) => {

    const [isArrowIcon, setIsArrowIcon] = useState(false);
    // const handleDropdownVisibleChange = (open: boolean) => {
    //     console.log(`Dropdown opened: ${open}`);
    // }
    return (
        <div className="selectWrapper">
            <label className="labelInput">{label}{isLabelStar && <span className="labelStar">*</span>}</label>
            <SelectAntd
                onDropdownVisibleChange={(open) => setIsArrowIcon(open)}
                // onClick={() => setIsArrowIcon(!isArrowIcon)}
                placeholder={placeholder}
                suffixIcon={<img src={isArrowIcon ? ArrowSelectUp : ArrowSelect} alt="" />}
                style={{
                    // padding: "8px 8px 8px 16px",
                    border: error ? "2px solid #ff776f" : "2px solid #cbd5e2",
                    borderRadius: "4px",

                }}
                bordered={false}
                size={"large"}
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