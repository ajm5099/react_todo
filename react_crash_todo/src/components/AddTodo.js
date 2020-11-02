import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
}

//using the [e.target.name] allows us to write the function once, and collect submit data from any form
onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10'}}
                    placeholder="Add Todo ..." 
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        value="submit"
                        className="btn"
                        style={{flex: '1'}}
                    />
            </form>
        )
    }
}

export default AddTodo