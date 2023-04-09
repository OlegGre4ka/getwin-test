import "./FlexBox";

interface IFlexBox {
    flexStyles: string;
    children: JSX.Element | React.ReactNode
}
const FlexBox = ({flexStyles, children}:IFlexBox) =>{
    return(
        <div className={flexStyles}>{children}</div>
    )
}

export default FlexBox;