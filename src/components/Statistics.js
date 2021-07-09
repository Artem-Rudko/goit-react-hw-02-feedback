const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
    <div className="Statistics">
        {total !== 0 ? (
            <>
                <p>Good: {good}</p>
                <p>Neutral: {neutral} </p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positiveFeedback} %</p>
            </>
        ) : (
            <p>No feedback is given</p>
        )}
    </div>
);

export default Statistics;
