import logo from '../../logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../common/slices/authSlice"
import { selectGetByUserStatus, getInvoicesByUser } from "../../common/slices/invoiceSlice"
import { useNavigate } from 'react-router-dom';



function PreviousOrders() {

    const dispatch = useDispatch()
    const result = useSelector(selectGetByUserStatus)
    const userString: string = useSelector(selectUser) || ""
    const user = JSON.parse(userString)
    const nav = useNavigate();

    if (!userString)
        nav("/login")

    switch (result) {
        case "idle":
            dispatch(getInvoicesByUser(user))
            break
        case "loading":
            break;
        case "success":
            break;
        case "failure":
            break;
        default:
            break;
    }

    return (
        <>
            <img src={logo} className="App-logo" style={{ width: '50%' }} alt="logo"></img>
        </>
    )
}

export default PreviousOrders