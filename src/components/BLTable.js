import React, { Component, Fragment } from 'react';

// Styles
import { Cell, CellHead, Table, BodyRow } from '../styles/BLTable';

const GetTable = (props) => {
    return (
        <Table>
            <tbody>
                <tr>
                    <CellHead>Platz</CellHead>
                    <CellHead>Team</CellHead>
                    <CellHead>Spiele</CellHead>
                    <CellHead>Gewonnen</CellHead>
                    <CellHead>Unentschieden</CellHead>
                    <CellHead>Verloren</CellHead>
                    <CellHead>Tor-Differenz</CellHead>
                    <CellHead>Punkte</CellHead>
                </tr>
                {props.data.map((team, i) => {
                    let league;
                    if(i <= 3) {
                        league = 'cl';
                    } else if(i > 3 && i <= 5) {
                        league = 'eu';
                    } else if(i === 15) {
                        league = 'rel';
                    } else if(i >= 16) {
                        league = 'abst';
                    }
                    return (
                        <BodyRow key={i} league={league}>
                            <Cell>{i+1}</Cell>
                            <Cell>{team.TeamName}</Cell>
                            <Cell>{team.Matches}</Cell>
                            <Cell>{team.Won}</Cell>
                            <Cell>{team.Draw}</Cell>
                            <Cell>{team.Lost}</Cell>
                            <Cell>{team.GoalDiff}</Cell>
                            <Cell>{team.Points}</Cell>
                        </BodyRow>
                    );
                })}
            </tbody>
        </Table>
    );
}

class BLTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentWillMount() {
        const year = new Date().getFullYear();

        const fetchData = (year) => {
            const url = `https://www.openligadb.de/api/getbltable/bl1/${year}`;
            fetch(url, {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(year);
                    const thisYear = new Date().getFullYear();

                    if(data.length <= 0 && thisYear - year <=1 ) {
                        year -= 1;
                        data = fetchData(year);
                    }
                    if(!data) return this.setState({ data: null });

                    console.log('Res ', data);

                    if(data.length > 0) {
                        this.setState({ data: data });
                    } else {
                        this.setState({data: null});
                    }
                })
                .catch(e => {
                    console.error('Error: ', e);
                })
            ;
        }

        fetchData(year);
    }
    
    render() {
        return (
            <Fragment>
                {!this.state.data ? <p>Loading...</p> : <GetTable data={this.state.data}/>}
            </Fragment>
        );
    }
};

export default BLTable;