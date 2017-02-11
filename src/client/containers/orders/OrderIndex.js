import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { OrderTable } from 'components/orders';
import { OrderIndexActions } from 'actions/orders';
import { LoadingOverlay } from 'components/shared';

class OrderIndex extends Component {
  static fetchData({ dispatch }) {
    return dispatch(OrderIndexActions.getOrders());
  }

  componentDidMount() {
    OrderIndex.fetchData(this.props);
  }

  render() {
    const { index } = this.props;

    const { items: orders, isLoading } = index;

    return (
      <LoadingOverlay isLoading={isLoading} showChildren={true}>
        <div>
          <h1>ORDERS</h1>
          <OrderTable items={orders}></OrderTable>
        </div>
      </LoadingOverlay>
    );
  }
}

OrderIndex.propTypes = {
  index: PropTypes.object
};

function mapStateToProps(state) {
  return {
    index: state.orders.index.toJS()
  };
}

export default connect(mapStateToProps)(OrderIndex);
