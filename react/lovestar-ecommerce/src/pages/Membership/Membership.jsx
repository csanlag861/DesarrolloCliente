import stylesMembership from "./membership.module.css";
import MembershipForm from "../../components/Forms/Membership/Membership";
import Card from "../../components/Cards/Card-Membership/Card";
import { CardContextProvider } from "../../context/ContextCard";

function Membership() {
    return (
        <CardContextProvider>
            <div className={stylesMembership.container}>
                <Card />
                <MembershipForm />
            </div>
        </CardContextProvider>
    );
}

export default Membership;