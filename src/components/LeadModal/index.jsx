import { Form, DivInputs, Input, Label } from "../Form";
import { SectionModal, DivModal, DivData, ExitIcon } from "./style";
import Logo from "../../images/logo.png";
import { useContext } from "react";
import { LeadsContext } from "../../Providers/leads";
import { useEffect } from "react";

const LeadModal = () => {
    const {
        lead,
        setLead,
        isChecked,
        setIsChecked,
        setIsModal,
        listLeads,
        setListLeads,
    } = useContext(LeadsContext);

    useEffect(() => {
        localStorage.setItem("Leads", JSON.stringify([...listLeads]));
    }, [listLeads]);

    return (
        <SectionModal>
            <ExitIcon onClick={() => setIsModal(false)}>
                <div />
                <div />
            </ExitIcon>
            <DivModal>
                <div className="div-logo">
                    <img src={Logo} alt="logomarca" />
                    <p>Novo Lead</p>
                </div>

                <DivData>
                    <Form width={250} height={270} alignItens={"flex-start"}>
                        <DivInputs alignItens={"flex-start"}>
                            <Label>Nome *</Label>
                            <Input
                                onChange={(evt) =>
                                    setLead({ ...lead, name: evt.target.value })
                                }
                                type="text"
                                required
                            />
                        </DivInputs>
                        <DivInputs alignItens={"flex-start"}>
                            <Label>Telefone *</Label>
                            <Input
                                onChange={(evt) =>
                                    setLead({
                                        ...lead,
                                        phone: evt.target.value,
                                    })
                                }
                                type="text"
                                required
                            />
                        </DivInputs>
                        <DivInputs alignItens={"flex-start"}>
                            <Label>Email *</Label>
                            <Input
                                onChange={(evt) =>
                                    setLead({
                                        ...lead,
                                        email: evt.target.value,
                                    })
                                }
                                type="email"
                                required
                            />
                        </DivInputs>
                    </Form>

                    <div className="div-opportunities">
                        <Label>Oportunidades *</Label>
                        <table>
                            <thead>
                                <tr>
                                    <th className="width-checked">
                                        <input
                                            onChange={() => {
                                                setLead({
                                                    ...lead,
                                                    opportunities: {
                                                        rpa: !isChecked,
                                                        digitalProduct:
                                                            !isChecked,
                                                        analytics: !isChecked,
                                                        bpm: !isChecked,
                                                    },
                                                });
                                                setIsChecked(!isChecked);
                                            }}
                                            checked={isChecked}
                                            type="checkbox"
                                        />
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="silver">
                                    <td className="width-checked">
                                        <input
                                            onChange={() =>
                                                setLead({
                                                    ...lead,
                                                    opportunities: {
                                                        ...lead.opportunities,
                                                        rpa: !lead.opportunities
                                                            .rpa,
                                                    },
                                                })
                                            }
                                            checked={lead.opportunities.rpa}
                                            type="checkbox"
                                        />
                                    </td>
                                    <td className="width-description">RPA</td>
                                </tr>
                                <tr>
                                    <td className="width-checked">
                                        <input
                                            onChange={() =>
                                                setLead({
                                                    ...lead,
                                                    opportunities: {
                                                        ...lead.opportunities,
                                                        digitalProduct:
                                                            !lead.opportunities
                                                                .digitalProduct,
                                                    },
                                                })
                                            }
                                            checked={
                                                lead.opportunities
                                                    .digitalProduct
                                            }
                                            type="checkbox"
                                        />
                                    </td>
                                    <td className="width-description">
                                        Produto Digital
                                    </td>
                                </tr>
                                <tr className="silver">
                                    <td className="width-checked">
                                        <input
                                            onChange={() =>
                                                setLead({
                                                    ...lead,
                                                    opportunities: {
                                                        ...lead.opportunities,
                                                        analytics:
                                                            !lead.opportunities
                                                                .analytics,
                                                    },
                                                })
                                            }
                                            checked={
                                                lead.opportunities.analytics
                                            }
                                            type="checkbox"
                                        />
                                    </td>
                                    <td className="width-description">
                                        Analytics
                                    </td>
                                </tr>
                                <tr>
                                    <td className="width-checked">
                                        <input
                                            onChange={() =>
                                                setLead({
                                                    ...lead,
                                                    opportunities: {
                                                        ...lead.opportunities,
                                                        bpm: !lead.opportunities
                                                            .bpm,
                                                    },
                                                })
                                            }
                                            checked={lead.opportunities.bpm}
                                            type="checkbox"
                                        />
                                    </td>
                                    <td className="width-description">BPM</td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            onClick={() => {
                                setListLeads([...listLeads, lead]);
                                setIsModal(false);
                            }}
                        >
                            Salvar
                        </button>
                    </div>
                </DivData>
            </DivModal>
        </SectionModal>
    );
};

export default LeadModal;
