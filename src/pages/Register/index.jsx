import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { SectionForm, Button } from "./style";
import Logo from "../../images/logo.png";
import { Form, DivInputs, Input, Label } from "../../components/Form";

const Register = () => {
    const history = useHistory();

    const formData = yup.object().shape({
        user: yup.string().required("Nome obrigatório."),
        password: yup
            .string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Digite uma senha forte"
            )
            .required("Senha obrigatória."),
        passwordConfirm: yup
            .string()
            .required("Confirmação de senha obrigatória.")
            .oneOf([yup.ref("password")], "As senhas estão diferentes"),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(formData),
    });

    const onSubmit = (object) => {
        localStorage.setItem("Usuário", JSON.stringify(object));
        history.push(`/`);
    };

    return (
        <SectionForm>
            <img src={Logo} alt="logo" />
            <Form
                onSubmit={handleSubmit(onSubmit)}
                width={300}
                height={400}
                alignItens={"center"}
            >
                <DivInputs alignItens={"center"}>
                    <Label>Usuário *</Label>
                    <Input type="text" {...register("user")} required />
                </DivInputs>

                <DivInputs alignItens={"center"}>
                    <Label>Senha *</Label>
                    <Input
                        placeholder="********"
                        type="password"
                        {...register("password")}
                        required
                    />
                </DivInputs>

                <DivInputs alignItens={"center"}>
                    <Label>Confirmação de senha *</Label>
                    <Input
                        placeholder="********"
                        type="password"
                        {...register("passwordConfirm")}
                        required
                    />
                </DivInputs>

                <Button>Registrar</Button>
            </Form>
        </SectionForm>
    );
};

export default Register;
