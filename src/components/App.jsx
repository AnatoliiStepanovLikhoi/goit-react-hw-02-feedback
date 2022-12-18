import React, { Component } from 'react';

import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, feedback) => (acc += feedback),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const totalFeedback = good + bad + neutral;
    return Math.round((good / totalFeedback) * 100);
  };

  onLeaveFeedback = e => {};

  render() {
    return (
      <Section title="Please leave feedback">
        {/* <FeedbackOptions options={ } onLeaveFeedback={ }></FeedbackOptions> */}
        {/* <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ }>
      </Statistics> */}
      </Section>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
