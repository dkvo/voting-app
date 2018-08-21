import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {ListGroup, ListGroupItem, Label} from 'react-bootstrap';

import {fetchPolls} from '../actions/polls_actions';

class Polls extends Component {

    componentDidMount() {
        this.props.fetchPolls();
    }

    render() {

        const polls = _.map(this.props.polls, poll => {
            return (
            <ListGroupItem key={poll._id}>
                <Link to={{
                    pathname: `/poll/${poll._id}`,
                    state: {
                        poll
                    }
                }}>
                {_.capitalize(poll.topic)}</Link></ListGroupItem>
            );
        })
        return(
            <div className='polls-list'>
                <div className='label-box'>
                <Label>Voting App Polls</Label>
                </div>
                <ListGroup>
                    {polls}
                </ListGroup>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
        polls: state.polls
});

export default connect(mapStateToProps,{fetchPolls})(Polls);