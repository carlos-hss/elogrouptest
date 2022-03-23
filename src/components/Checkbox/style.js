import styled from "styled-components";

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    transform: scale(1);

    input[type="checkbox"] {
        height: 1rem;
        width: 1rem;
        margin: 5px;
        display: inline-block;
        appearance: none;
        position: relative;
        background-color: var(--black);
        border-radius: 15%;
        cursor: pointer;
        overflow: hidden;

        ::after {
            content: "";
            display: block;
            height: 0.35rem;
            width: 0.17rem;
            border-bottom: 0.22rem solid var(--white);
            border-right: 0.22rem solid var(--white);
            opacity: 0;
            transform: rotate(45deg) translate(-45%, -60%);
            position: absolute;
            top: 50%;
            left: 20%;
            transition: 0.25s ease;
        }
        ::before {
            content: "";
            display: block;
            height: 0;
            width: 0;
            background-color: var(--black);
            border-radius: 50%;
            opacity: 0.5;
            transform: translate(-50%, -50%);
            position: absolute;
            top: 50%;
            left: 50%;
            transition: 0.3s ease;
        }

        :checked::before {
            height: 100%;
            width: 100%;
            opacity: 100%;
        }

        :checked::after {
            opacity: 100%;
        }
    }

    span {
        font-size: 2rem;
    }
`;
