import { PropTypes } from 'react';

const getClassName = (type, canGrow, className) => {
  let colClassName = 'table-column';

  if (type !== 'default')
    colClassName += ' ' + type;

  if (className)
    colClassName += ' ' + className;

  if (canGrow)
    colClassName += ' ' + 'grow';

  return colClassName;
};

const TableColumn = props => {
  const { type, className, canGrow, children } = props;

  return (
    <div className={getClassName(type, canGrow, className)}>
      { children }
    </div>
  );
};

TableColumn.propTypes = {
  type: PropTypes.oneOf([ 'buttons', 'icon', 'default' ]),
  className: PropTypes.string,
  canGrow: PropTypes.bool,
  children: PropTypes.any
};

TableColumn.defaultProps = {
  type: 'default',
  canGrow: false
};

export default TableColumn;
