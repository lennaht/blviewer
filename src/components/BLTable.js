import React, { Component, Fragment } from 'react';

const GetTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Spiele</th>
                    <th>Gewonnen</th>
                    <th>Unentschieden</th>
                    <th>Verloren</th>
                    <th>Tor-Differenz</th>
                    <th>Punkte</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((team, i) => (
                    <tr key={i}>
                        <th>{team.TeamName}</th>
                        <th>{team.Matches}</th>
                        <th>{team.Won}</th>
                        <th>{team.Draw}</th>
                        <th>{team.Lost}</th>
                        <th>{team.GoalDiff}</th>
                        <th>{team.Points}</th>
                    </tr>
                ))}
            </tbody>
        </table>
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

        /* let res = fetchData(year);
        console.log(res);
        if(!res) res = fetchData(year - 1);
        if(!res) return this.setState({ data: null });
        console.log('Res ', res);
        if(res.length > 0) {
            this.setState({ data: res });
        } else {
            this.setState({data: null});
        } */
    }
    
    render() {
        return (
            <Fragment>
                {!this.state.data ? <p>No data...</p> : <GetTable data={this.state.data}/>}
            </Fragment>
        );
    }
};

export default BLTable;