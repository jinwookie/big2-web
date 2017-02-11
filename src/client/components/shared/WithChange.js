import { Component, PropTypes } from 'react';

export default InputComponent => {
  class WithChange extends Component {
    constructor() {
      super();
      this.state = {
        value: ''
      };

      this.t = null;
    }

    componentDidMount() {
      const { value } = this.props;
      this.setState({ value });
    }

    componentWillReceiveProps(nextProps) {
      const { value } = this.props;
      const { value: nextValue } = nextProps;

      if (nextValue !== value)
        this.setState({ value: nextValue });
    }

    change(e) {
      const { onUpdate } = this.props;
      const { value } = e.target;

      this.setState({ value });

      if (this.t)
        clearTimeout(this.t);

      this.t = setTimeout(() => onUpdate(value), 500);
    }

    blur(e) {
      const { onUpdate } = this.props;
      onUpdate(e.target.value);
    }

    render() {
      const { value: propValue, onUpdate, ...rest } = this.props;
      const { value } = this.state;
      () => ({ propValue, onUpdate });
      return <InputComponent {...rest} onChange={e => this.change(e)} onBlur={e => this.blur(e)} value={value} />;
    }
  }

  WithChange.propTypes = {
    value: PropTypes.string,
    onUpdate: PropTypes.func
  };

  return WithChange;
};
