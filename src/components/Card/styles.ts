import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: space-evenly;
    flex-direction: column;
    width: 20vw;
    height: 70vh;
    padding: 1%;
    margin: 2.5%;
    line-height: 25px;
    background-color: #f5f5f5;

    .subcontainer {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .sale {
        margin-top: 5%;
        color: green;
    }

    a {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
        :hover {
            color: #000080;
        }
    }

    .label {
        color: grey;
    }

    .btn {
        width: 35px;
        height: 35px;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.5px solid blue;
        border-radius: 35px;
        outline: 0;
        cursor: pointer;
        :hover {
            background-color: #000080;
            color: white;
        }
    }

    .add {
        width: 30%;
        height: 100%;
        border-radius: 8px;
        background-color: #c9c9c9;
        outline: 0;
        cursor: pointer;
        :hover {
            background-color: #c1c1c1;
        }
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
        margin-top: 5%;
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        width: 40%;
        margin: 5%;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 5%;
`;

export const Image = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
    cursor: pointer;
    background-color: red;
`;
