import React from 'react';

class TodoForm extends React.Component {
    state = {
        friendInput: ''
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
                    <input type="text" name="friendInput" value={this.state.friendInput}/>
                </form>
            </div>
        )
    }
}

export default TodoForm;