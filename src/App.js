import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchData });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>From JS Mastery</h1>
        <Cards data={this.state.data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
