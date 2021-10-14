import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "--Choose Country--",
      selectedState: "--Choose State--",
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.length === 1) {
      this.setState({
        countries: [
          {
            name: "Germany",
            states: [
              {
                name: "germany1",
                cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
              },
              {
                name: "germany2",
                cities: ["Barcelona", "Downers Grove", "Puebla"],
              },
            ],
          },
          {
            name: "Spain",
            states: [
              { name: "spain1", cities: ["Barcelona"] },
              { name: "spain2", cities: ["Eschborn"] },
              { name: "spain3", cities: ["Barcelona", "Downers Grove"] },
            ],
          },
          {
            name: "USA",
            states: [
              {
                name: "washingTon",
                cities: ["Downers Grove", "Lowa", "atlanda"],
              },
              { name: "los-vegas", cities: ["Toronto", "kili", "washgoto"] },
              { name: "Las-Angles", cities: ["trivo", "Lowagries", "klur"] },
            ],
          },
          {
            name: "Mexico",
            states: [
              { name: "mexico1", cities: ["Puebla"] },
              { name: "mexico2", cities: ["Downers", "Lowasdf", "atlandayu"] },
              {
                name: "mexico3",
                cities: ["Torontore", "kiliew", "washgotoet"],
              },
              { name: "alu", cities: ["trivort", "Lowagriesyu", "kluroi"] },
            ],
          },
          {
            name: "India",
            states: [
              {
                name: "Delhi",
                cities: ["gandhi-nagar", "jummu", "varansi", "new-delhi"],
              },
              {
                name: "TamilNadu",
                cities: ["chennai", "madurai", "virudhunagar", "theni"],
              },
              {
                name: "karnataka",
                cities: ["newBangalore", "khulu", "erovo", "Bangalore"],
              },
            ],
          },
        ],
      });
    } else {
      this.props.history.push("/");
    }
  }

  changeCountry(event) {
    this.setState({ selectedCountry: event.target.value });
    this.setState({
      states: this.state.countries.find(
        (cntry) => cntry.name === event.target.value
      ).states,
    });
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value });
    const stats = this.state.countries.find(
      (cntry) => cntry.name === this.state.selectedCountry
    ).states;
    this.setState({
      cities: stats.find((stat) => stat.name === event.target.value).cities,
    });
  }

  render() {
    return (
      <div id="container">
        <div>
          <label>Country</label>
          <select
            placeholder="Country"
            value={this.state.selectedCountry}
            onChange={this.changeCountry}
          >
            <option>--Choose Country--</option>
            {this.state.countries.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label>State</label>
          <select
            placeholder="State"
            value={this.state.selectedState}
            onChange={this.changeState}
          >
            <option>--Choose State--</option>
            {this.state.states.map((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label>City</label>
          <select placeholder="City">
            <option>--Choose City--</option>
            {this.state.cities.map((e, key) => {
              return <option key={key}>{e}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
