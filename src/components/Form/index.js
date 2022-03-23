import styled from "styled-components";

export const Form = styled.form`
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: ${({ alignItens }) => alignItens};
    background-color: transparent;
    border: none;
`;

export const DivInputs = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: ${({ alignItens }) => alignItens};
`;

export const Input = styled.input`
    width: 95%;
    height: 35px;
    border: 1px solid var(--black);
    padding-left: 4%;

    ::placeholder {
        color: var(--silver);
    }
`;

export const Label = styled.label`
    width: 90%;
    font-size: 14px;
    text-align: left;
`;
