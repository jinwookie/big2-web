import withChange from './WithChange';

const TextArea = ({
  value,
  onUpdate,
  ...rest
}) =>
  withChange(<textarea className="form-control" onUpdate={onUpdate} value={value} {...rest} />);

export default TextArea;
