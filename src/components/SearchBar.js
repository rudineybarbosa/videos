import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ""
    }

    onSubmitForm = event => {
        event.preventDefault();

        this.props.onAppSubmit(this.state.term);
    }

    onInputChange = event => {
        
        this.setState({term: event.target.value});
        
        //console.log(event.target.value);
    }

    render(){

        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}>
                        </input>
                    </div>
                </form>


            </div>
        )
    }
}

export default SearchBar;