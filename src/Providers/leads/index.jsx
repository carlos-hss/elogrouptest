import { useEffect } from "react";
import { createContext, useState } from "react";

export const LeadsContext = createContext([]);

export const LeadsProvider = ({ children }) => {
    const [lead, setLead] = useState({
        name: "",
        phone: "",
        email: "",
        opportunities: {
            rpa: false,
            digitalProduct: false,
            analytics: false,
            bpm: false,
        },
        status: "Cliente em Potencial",
    });
    const [isChecked, setIsChecked] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [listLeads, setListLeads] = useState(
        JSON.parse(localStorage.getItem("Leads")) || []
    );

    const addLead = () => {
        setListLeads([...listLeads, lead]);
        setIsModal(false);
    };

    const dragEnd = (evt, lead) => {
        const actualLead = listLeads.find((item) => item === lead);
        let list = [...listLeads];

        if (lead.status === "Cliente em Potencial") {
            const leadModified = { ...actualLead, status: "Dados Confirmados" };
            list.splice(list.indexOf(actualLead), 1, leadModified);
            setListLeads([...list]);
        } else if (lead.status === "Dados Confirmados") {
            const leadModified = {
                ...actualLead,
                status: "Reunião Agendada",
            };
            list.splice(list.indexOf(actualLead), 1, leadModified);
            setListLeads([...list]);
        }

        evt.preventDefault();
    };

    useEffect(() => {
        localStorage.setItem("Leads", JSON.stringify([...listLeads]));
    }, [listLeads]);

    return (
        <LeadsContext.Provider
            value={{
                lead,
                setLead,
                isChecked,
                setIsChecked,
                isModal,
                setIsModal,
                listLeads,
                setListLeads,
                addLead,
                dragEnd,
            }}
        >
            {children}
        </LeadsContext.Provider>
    );
};
