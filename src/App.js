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
        if (e.target.dataset.type === 'good') {
            this.setState(prevState => ({ good: prevState.good + 1 }));
        } else if (e.target.dataset.type === 'neutral') {
            this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        } else {
            this.setState(prevState => ({ bad: prevState.bad + 1 }));
        }
    };

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div className="App">
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
                </Section>
                <Section title="Statistics">
                    <Statistics good={good} neutral={neutral} bad={bad} />
                </Section>
            </div>
        );
    }
}

export default App;
