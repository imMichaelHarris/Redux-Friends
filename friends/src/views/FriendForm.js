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

    render(){
        return (
            <div>
                <form>
                    <input type="text" name="name" value={this.state.name}/>
                    <input type="number" name="age" value={this.state.age}/>
                    <input type="email" name="email" value={this.state.email}/>

                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;