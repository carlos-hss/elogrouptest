import React from "react";
import { SectionTable, Table } from "./style";
import Logo from "../../images/logo.png";
import { useContext } from "react";
import { LeadsContext } from "../../Providers/leads";
import LeadModal from "../../components/LeadModal";

const Leads = () => {
    const { isModal, setIsModal, listLeads } = useContext(LeadsContext);

    return (
        <>
            {isModal && <LeadModal />}
            <SectionTable>
                <div className="div-all">
                    <div className="div-logo">
                        <img src={Logo} alt="" />
                        <p>Painel de Leads</p>
                    </div>
                    <div className="div-button">
                        <button onClick={() => setIsModal(true)}>
                            Novo Lead (+)
                        </button>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Cliente em Potencial</th>
                            <th>Dados Confirmados</th>
                            <th>Reunião Agendada</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listLeads.map((lead, index) => (
                            <tr key={index}>
                                <td>{lead.name}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </SectionTable>
        </>
    );
};

export default Leads;
