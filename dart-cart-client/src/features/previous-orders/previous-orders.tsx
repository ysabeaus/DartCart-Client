import logo from '../../logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../common/slices/authSlice"
import { selectGetByUserStatus, getInvoicesByUser, selectInvoices } from "../../common/slices/invoiceSlice"
import { useNavigate } from 'react-router-dom';
import Error404Page from '../../components/Error';



function PreviousOrders() {

    const dispatch = useDispatch()
    const result = useSelector(selectGetByUserStatus)
    const userString: string = useSelector(selectUser) || ""
    const user = JSON.parse(userString)
    const nav = useNavigate();
    const invoices = useSelector(selectInvoices)

    if (!userString)
        nav("/login")

    switch (result) {
        case "idle":
            dispatch(getInvoicesByUser(user))
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
            {((result === "idle" || result === "loading") &&
                <>
                    <h1>Loading</h1>
                    <img src={logo} className="App-logo" style={{ width: '50%' }} alt="logo"></img>
                </>
            ) || (result === "success") &&
                <>
                </>
                || <Error404Page />
            }
        </>
    )
}

export default PreviousOrders