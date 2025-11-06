import stylesMembership from "./membership.module.css";
import MembershipForm from "../../components/Forms/Membership/Membership";
import Card from "../../components/Cards/Card-Membership/Card";

function Membership() {
    return (
        <div className={stylesMembership.container}>
            <Card />
            <MembershipForm />
        </div>
    );
}

export default Membership;