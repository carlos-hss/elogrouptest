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
    });

    const [isChecked, setIsChecked] = useState(false);

    const [isModal, setIsModal] = useState(false);

    const [listLeads, setListLeads] = useState(
        JSON.parse(localStorage.getItem("Leads")) || []
    );

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
            }}
        >
            {children}
        </LeadsContext.Provider>
    );
};
