import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    max-height: 350px;
    border-collapse: collapse;

    th,
    td {
        text-align: center;
        width: 33.33%;
        height: 60px;
        font-size: 12px;
        border: 1px solid var(--black);
    }

    th {
        background-color: var(--gray);
        color: var(--white);
    }
`;

export const SectionTable = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 25px;
    max-width: 640px;
    max-height: 500px;
    border: 1px solid var(--black);

    .div-all {
        width: 100%;
        min-height: 145px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 5px;
    }

    .div-logo {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 50%;

        img {
            width: 230px;
        }

        p {
            width: 50%;
            height: 52px;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .div-button {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-end;
        width: 100%;
        height: 50%;

        button {
            width: 33.33%;
            height: 43px;
            font-size: 15px;
            font-weight: 700;
            color: var(--white);
            border: 2px solid var(--blue);
            background-color: var(--blue);
            transition: 0.2s ease-in;

            :hover {
                background-color: var(--white);
                color: var(--blue);
                border-radius: 5px;
            }
        }
    }
`;
