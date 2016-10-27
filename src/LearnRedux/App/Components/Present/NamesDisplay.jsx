import React, { Component } from 'react';

export default class NamesDisplay extends Component {
    render() {
        return (
		    <div>
                <form onSubmit={(e) => { e.preventDefault(); this.props.addName(e.target.name.value); }}>
                    <input type="text" name="name" />
                    <input type="submit" value="add name" />
                </form>
                <button onClick={this.props.toggleRemoveMode}>Toggle Remove</button>
                <ul>
                    {this.props.names.map((name, index) =>
                    <li onClick={
                        ()=> this.props.removeMode ?
                        this.props.removeName(index)
                        :
                        this.props.onNameClick(index)} style={{fontSize: name.textSize + 'rem'}} key={'name' + index}>{name.name}
                    </li>)}
                </ul>
            </div>
	    );
    }
}