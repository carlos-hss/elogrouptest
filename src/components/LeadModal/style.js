import styled from "styled-components";

export const SectionModal = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgb(0, 0, 0, 0.85);
`;

export const DivModal = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 25px;
    max-width: 740px;
    min-height: 400px;
    max-height: 500px;
    background-color: var(--white);
    border: 2px solid var(--black);

    .div-logo {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 60px;

        img {
            height: 60px;
        }

        p {
            width: 50%;
            height: 60px;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const ExitIcon = styled.div`
    width: 2rem;
    height: 1.3rem;
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    cursor: pointer;

    div {
        width: 2rem;
        height: 4px;
        background-color: var(--white);
        border-radius: 10px;
        transform-origin: 9px;
        transition: all 0.3s linear;

        :nth-child(1) {
            transform: rotate(45deg);
        }

        :nth-child(2) {
            transform: rotate(-45deg);
        }
    }
`;

export const DivData = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 270px;

    .div-opportunities {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        align-items: flex-start;
        width: 50%;
        height: 270px;

        table {
            width: 95%;
            height: 120px;
            border-collapse: collapse;

            tr {
                height: 25px;
                max-height: 25px;
            }

            th,
            td {
                border: 1px solid var(--black);
            }

            th {
                background-color: var(--gray);
            }

            .width-checked {
                width: 10%;
                text-align: center;
            }

            .width-description {
                padding-left: 3%;
            }

            .silver {
                background-color: var(--silver);
            }
        }

        button {
            width: 95%;
            height: 50px;
            font-size: 17px;
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
