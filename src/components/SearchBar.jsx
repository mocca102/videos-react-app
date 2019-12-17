/* eslint-disable react/prop-types */
import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { getDataOnSubmit } = this.props;
    const { term } = this.state;
    getDataOnSubmit(term);
  }

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    const { term } = this.state;

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="feild">
            <label htmlFor="search">
              Video Search
              <input
                id="search"
                type="text"
                value={term}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
