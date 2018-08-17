import React, {Component} from 'react';
import {coonect} from 'react-redux';
import {ListGroup, ListGroupItem, Label} from 'react-bootstrap';

class Polls extends Component {

    componentDidMount() {
        this.props.fetchpolls();
    }

    render() {
        return(
            <div>
                <div className='label-box'>
                <Label>Voting App Polls</Label>
                </div>
                <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Polls;