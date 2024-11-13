import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ? 
        <Link to={"/cart"} className="btn fondoPrimario position-relative mx-3">
            <img src="" alt="" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : ""
    )
}
export default CartWidget;