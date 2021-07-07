import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import'../App.css';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            inputText: ''
        }
    }

    changeHandler = event => {
        this.setState({ inputText: event.target.value });
    };

    createTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.inputText);
        this.setState({ 
            inputText: '' 
        });
    }


    render() {
        return (
            <div className='formWrap'>
                <form onSubmit={this.createTodo}>
                    <input
                    type="text"
                    placeholder='...What do I need to do?'
                    value={this.state.inputText}
                    onChange={this.changeHandler}
                    >
                    </input>
                </form>
                <button type='submit' onClick={this.createTodo}>Add A To-Do!</button>
            </div>
        )
    
    }
    
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
    { addTodo: addTodo }
)(TodoInput);