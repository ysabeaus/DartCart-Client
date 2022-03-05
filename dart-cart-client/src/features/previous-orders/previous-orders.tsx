import logo from '../../logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../common/slices/authSlice"
import { selectGetByUserStatus, getInvoicesByUser, selectInvoices, clearInvoices, resetState } from "../../common/slices/invoiceSlice"
import { useNavigate } from 'react-router-dom';
import Error404Page from '../../components/Error';
import OrderCard from './OrderCard';
import { useEffect } from 'react';

interface Orders {
    date: Date
    cards: JSX.Element[]
}

function PreviousOrders() {

    const dispatch = useDispatch()
    const result = useSelector(selectGetByUserStatus)
    const userString: string = useSelector(selectUser) || ""
    const user = JSON.parse(userString)
    const nav = useNavigate();
    const invoices = useSelector(selectInvoices)
    var orders: Orders[] = [];

    useEffect(() => {
        dispatch(clearInvoices)
        dispatch(resetState)
    }, [])

    if (!userString)
        nav("/login")

    switch (result) {
        case "idle":
            dispatch(getInvoicesByUser(user))
            break;
        case "finished":
            for (let i = 0; i < invoices.length; ++i) {
                orders.push({ cards: [], date: new Date(Number(invoices[i].orderPlaced)) })
                for (let j = 0; j < invoices[i].orderDetails.length; ++j)
                    orders[i].cards.push(
                        <>
                            <OrderCard detail={invoices[i].orderDetails[j]}></OrderCard>
                        </>
                    )
            }
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

            ) || ((result === "finished") &&
                <>
                    {orders.map((order) => {
                        return (
                            <>
                                <div className="">{order.date.toDateString()}</div>
                                <div className="ProductCardContainer">
                                    {order.cards}
                                </div>
                            </>
                        )
                    })}
                </>)

                || <Error404Page />
            }
        </>
    )
}

export default PreviousOrders