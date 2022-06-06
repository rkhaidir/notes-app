import React from "react";

export default class SearchNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSearch(event) {
    this.setState({ search: event.target.value });
  }

  onSubmitSearch(search) {
    this.props.searchNotes(search);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark shadow fixed-top">
        <div className="container">
          <span className="navbar-brand">Notes App</span>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Cari Catatan"
              value={this.state.search}
              onChange={this.onSearch}
              onKeyUp={() => this.onSubmitSearch(this.state.search)}
            />
          </div>
        </div>
      </nav>
    );
  }
}
