import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.protoType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
