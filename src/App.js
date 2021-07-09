import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = e => {
        if (e.target.textContent === 'Good') {
            this.setState(prevState => ({ good: prevState.good + 1 }));
        } else if (e.target.textContent === 'Neutral') {
            this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        } else {
            this.setState(prevState => ({ bad: prevState.bad + 1 }));
        }
    };

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage() {
        return Math.round(
            (this.state.good * 100) /
                (this.state.good + this.state.neutral + this.state.bad),
        );
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div className="App">
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positiveFeedback={positivePercentage}
                    />
                </Section>
            </div>
        );
    }
}

export default App;
