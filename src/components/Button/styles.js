import styled from 'styled-components'

export const ButtonContainer = styled.button`
    padding: 15px;
    border: 1px solid #CDCDCD;
    margin: 10px 5px;
    background-color: #b2d8d8;
    font-size: 25px;
    font-weight: 700;
    flex: 1;

    &: hover {
        opacity: 0.8;
        cursor: pointer;
    }

    &: selected {
        background-color: maroon;
    }
`

