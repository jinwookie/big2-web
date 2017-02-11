import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { SingleOrderActions } from 'actions/orders';
import { LoadingOverlay } from 'components/shared';

class OrderEdit extends Component {
  static fetchData({ dispatch, params }) {
    return dispatch(SingleOrderActions.getOrder(params.id));
  }

  componentDidMount() {
    OrderEdit.fetchData(this.props);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(SingleOrderActions.clear());
  }

  render() {
    const { edit } = this.props;
    const { order, isLoading } = edit;

    const arr = [ ];
    for (let i = 0; i < 30; i++)
      arr.push(<div key={i}>{i}</div>);

    return (
        <LoadingOverlay isLoading={isLoading} showChildren={true}>
          <div>
            <h1>Order #{order.orderId} - {order.orderName}</h1>
            { arr }
          </div>
        </LoadingOverlay>
    );
  }
}

function mapStateToProps(state) {
  return {
    edit: state.orders.edit.toJS()
  };
}

OrderEdit.propTypes = {
  dispatch: PropTypes.func,
  edit: PropTypes.object
};

export default connect(mapStateToProps)(OrderEdit);
