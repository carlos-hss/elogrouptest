import { useContext } from "react";
import { LeadsContext } from "../../Providers/leads";
import { TD } from "./style";

const Card = ({ children, lead }) => {
    const { dragEnd } = useContext(LeadsContext);

    return (
        <TD onDragEnd={(evt) => dragEnd(evt, lead)}>
            <div draggable={!!children}>{children}</div>
        </TD>
    );
};

export default Card;
