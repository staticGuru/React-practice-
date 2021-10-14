// basic.autosuggest.js
import React from 'react';
import Autosuggest from 'react-autosuggest';
import './autosuggest.css';

class Autosuggestion extends React.Component {
    constructor(props) {
        super(props);

        //Define state for value and suggestion collection
        this.state = {
            value: '',
            suggestions: []
        };
    }

    

    // Filter logic
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.props.items.filter(lang =>
            lang.title.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.title;

    // Render Each Option
    renderSuggestion = suggestion => (
        <div>
            {suggestion.title} | Founded in {suggestion.id}, {suggestion.body}
        </div>
    );

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Type title of json',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
           
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default Autosuggestion;