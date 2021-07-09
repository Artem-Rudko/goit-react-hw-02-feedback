const FeedbackOptions = ({ onLeaveFeedback }) => (
    <div className="feedbackControls">
        <button type="button" className="goodBtn" onClick={onLeaveFeedback}>
            Good
        </button>
        <button type="button" className="neutralBtn" onClick={onLeaveFeedback}>
            Neutral
        </button>
        <button type="button" className="badBtn" onClick={onLeaveFeedback}>
            Bad
        </button>
    </div>
);

export default FeedbackOptions;
