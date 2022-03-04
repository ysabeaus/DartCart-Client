import { useDispatch, useSelector } from "react-redux";
import { selectStatus } from "../../common/accountSlice"



function PreviousOrders() {

    const dispatch = useDispatch();
    const result = useSelector(selectStatus);

    switch (result) {
        case "idle":
            break
        default:
            break;
    }

    return (
        <>

        </>
    )
}

export default PreviousOrders