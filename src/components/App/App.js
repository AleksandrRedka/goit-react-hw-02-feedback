import React, { Component } from 'react';
import Title from '../Title/Title';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Buttons from '../Buttons/Buttons';

export default class App extends Component {
  state = {
    good: 1,
    neutral: 0,
    bad: 0,
  };

  totalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  leaveFeedback = ({ target }) => {
    const { name } = target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  resetFeedback = () => this.setState({ good: 0, neutral: 0, bad: 0 });

  render () {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Title text='Please leave feedback' />
        <Buttons
          options={['good', 'neutral', 'bad']}
          leaveFeedback={this.leaveFeedback}
          reset={this.resetFeedback}
        />
        {this.totalFeedbacks() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedbacks()}
          />
        ) : (
          <Notification message='No feedback given' />
        )}
      </div>
    );
  }
}
