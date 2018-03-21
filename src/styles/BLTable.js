import styled from 'styled-components';

export const Cell = styled.td`
    font-weight: normal;
    color: black;
    border-bottom: 1px solid black;
    vertical-align: center;
    text-align: center;
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const BodyRow = styled.tr`
    border-bottom: 1px solid grey;
    background-color: ${props => {
        if(props.league) {
            if(props.league === 'cl') return '#e5ef7c';
            if(props.league === 'eu') return '#7ca4ef';
            if(props.league === 'rel') return '#ef7c7c';
            if(props.league === 'abst') return '#e83030';
        } else {
            return 'inherit';
        }
    }} !important;
`;

export const CellHead = Cell.extend`
    font-weight: bold;
    border-bottom: 3px solid grey;
    background-color: white;
`;

export const Table = styled.table`
    border-collapse: seperate;
    border-spacing: 0;
    border-color: red;

    margin: auto;

    tr:nth-child(even) {
        background-color: #efefef;
    }
`;