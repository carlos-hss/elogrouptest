import React from "react";
import { SectionTable, Table } from "./style";
import Logo from "../../images/logo.png";

const Leads = () => {
    return (
        <SectionTable>
            <div className="div-all">
                <div className="div-logo">
                    <img src={Logo} alt="" />
                    <p>Painel de Leads</p>
                </div>
                <div className="div-button">
                    <button>Novo Lead (+)</button>
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
                    <tr>
                        <td>Org. Internacionais</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Ind. Farm. LTDA</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Musc. Sound Live Cmp</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Musc. Sound Live Cmp</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </SectionTable>
    );
};

export default Leads;
