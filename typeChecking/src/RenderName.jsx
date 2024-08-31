import PropTypes from 'prop-types';

const RenderName = (props) => {
  return <div>{props.name} {props.title}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

RenderName.defaultProps = {
    name: 'Zach',
};

export default RenderName;
