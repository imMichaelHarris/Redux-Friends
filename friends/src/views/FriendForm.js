import React from 'react';

class TodoForm extends React.Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFriend = e => {
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChanges} />
                    <label>Age:</label>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleChanges}/>
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChanges}/>

                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;