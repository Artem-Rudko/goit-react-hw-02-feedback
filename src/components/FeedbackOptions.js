import './FeedbackOptions.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <div className="feedbackControls">
        <button
            type="button"
            className="goodBtn"
            data-type="good"
            onClick={onLeaveFeedback}
        >
            Good
        </button>
        <button
            type="button"
            className="neutralBtn"
            data-type="neutral"
            onClick={onLeaveFeedback}
        >
            Neutral
        </button>
        <button
            type="button"
            className="badBtn"
            data-type="bad"
            onClick={onLeaveFeedback}
        >
            Bad
        </button>
    </div>
);

export default FeedbackOptions;
