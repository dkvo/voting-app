import React, {Component} from 'react';
import Cookies from 'universal-cookie';
import {Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import PieChart from '../components/pie_chart';
import {updateVote} from '../actions/polls_actions';
class Poll extends Component {
    constructor(props) {
        super(props);
        this.handleUpdateVote = this.handleUpdateVote.bind(this);
        this.state = {
            errorMessage: ''
        };
    }

    handleUpdateVote(option) {
        console.log(option);
        const cookies = new Cookies();
        if(!cookies.get('acessToken')) {
            this.setState({errorMessage: `Please Sign in to vote.`});
        }
        else {
            this.props.updateVote(this.props.location.state.poll, option);
        }
    }

    render() {
        let error = null;
        if(this.state.errorMessage !== '') {
            error = <Alert bsStyle="info"><Link to='/'>{this.state.errorMessage}</Link></Alert>;
        }
        const poll = this.props.location.state.poll;
        console.log(poll);
        const choices = poll.options.map(obj => {
            return <li key={obj._id} onClick={e => this.handleUpdateVote(obj.option)}>{obj.option}</li>
        });
        return (
            <div className='poll-canvas'>
                <div className='chart-board'>
                    <div className='poll'>
                        <label>{_.capitalize(poll.topic)}</label>
                        <ol type='A'>
                            {choices}
                        </ol>
                    </div>
                    <PieChart stat={poll}/>
                </div>
                {error}
            </div>
        );
    }
}

export default Poll;