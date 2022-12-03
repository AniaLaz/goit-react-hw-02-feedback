import React from 'react';
import Section from '../Section/Section';

export class App extends React.Component {
  state = {
    valueGood: 0,
    valueNeutral: 0,
    valueBad: 0,
  };

  handlGood = () => {
    this.setState(prevState => ({
      valueGood: prevState.valueGood + 1,
    }));
  };
  handlNeutral = () => {
    this.setState(prevState => ({
      valueNeutral: prevState.valueNeutral + 1,
    }));
  };
  handlBad = () => {
    this.setState(prevState => ({
      valueBad: prevState.valueBad + 1,
    }));
  };

  render() {
    return (
      <div>
        <Section
          handlGood={this.handlGood}
          handlNeutral={this.handlNeutral}
          handlBad={this.handlBad}
          valueGood={this.state.valueGood}
          valueNeutral={this.state.valueNeutral}
          valueBad={this.state.valueBad}
        />
      </div>
    );
  }
}
