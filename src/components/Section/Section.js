import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import css from 'components/Section/Section.module.css';

class Section extends React.Component {
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
      <section className={css.sectionFeedback}>
        <FeedbackOptions
          onGood={this.handlGood}
          onNeutral={this.handlNeutral}
          onBad={this.handlBad}
        />
        <Statistics
          valueGood={this.state.valueGood}
          valueNeutral={this.state.valueNeutral}
          valueBad={this.state.valueBad}
        />
      </section>
    );
  }
}

export default Section;
