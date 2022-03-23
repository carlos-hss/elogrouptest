import { Form, DivInputs, Input, Label } from "../Form";
import { SectionModal, DivModal, DivData } from "./style";
import Logo from "../../images/logo.png";
import Checkbox from "../Checkbox";

const LeadModal = () => {
    return (
        <SectionModal>
            <DivModal>
                <div className="div-logo">
                    <img src={Logo} alt="" />
                    <p>Novo Lead</p>
                </div>

                <DivData>
                    <Form width={250} height={270} alignItens={"flex-start"}>
                        <DivInputs alignItens={"flex-start"}>
                            <Label>Nome *</Label>
                            <Input type="text" required />
                        </DivInputs>
                        <DivInputs alignItens={"flex-start"}>
                            <Label>Telefone *</Label>
                            <Input type="text" required />
                        </DivInputs>
                        <DivInputs alignItens={"flex-start"}>
                            <Label>Email *</Label>
                            <Input type="email" required />
                        </DivInputs>
                    </Form>

                    <div className="div-opportunities">
                        <Label>Oportunidades *</Label>
                        <table>
                            <thead>
                                <tr>
                                    <th className="width-checked">
                                        <Checkbox />
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="silver">
                                    <td className="width-checked">
                                        <Checkbox />
                                    </td>
                                    <td className="width-description">RPA</td>
                                </tr>
                                <tr>
                                    <td className="width-checked">
                                        <Checkbox />
                                    </td>
                                    <td className="width-description">
                                        Produto Digital
                                    </td>
                                </tr>
                                <tr className="silver">
                                    <td className="width-checked">
                                        <Checkbox />
                                    </td>
                                    <td className="width-description">
                                        Analytics
                                    </td>
                                </tr>
                                <tr>
                                    <td className="width-checked">
                                        <Checkbox />
                                    </td>
                                    <td className="width-description">BPM</td>
                                </tr>
                            </tbody>
                        </table>
                        <button>Salvar</button>
                    </div>
                </DivData>
            </DivModal>
        </SectionModal>
    );
};

export default LeadModal;
