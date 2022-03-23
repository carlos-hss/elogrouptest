import styled from "styled-components";

export const SectionForm = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 17px 7px;
    align-items: center;
    width: 100%;
    max-width: 370px;
    height: 530px;
    background-color: var(--white);
    border: 2px solid var(--black);

    img {
        width: 86%;
    }
`;

export const Button = styled.button`
    width: 85.5%;
    height: 50px;
    color: var(--ocean-blue);
    border: 1px solid var(--black);
    background-color: transparent;
    transition: 0.2s ease-in;

    :hover {
        color: var(--white);
        background-color: var(--ocean-blue);
    }
`;
