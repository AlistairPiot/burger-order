import { useSelector } from "react-redux";
import { getListQuantityProductPername } from "../../app/selectors";

export const Cart = () => {
    const list = useSelector(getListQuantityProductPername)
   return <div className="Selection">
    {
        list?.map(
            (item, index) => <span key={index} className="SelectedProduct">{item.quantity} x {item.title} </span>
        )
    }
    </div>
};
