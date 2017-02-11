import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, TableHeader, TableRow, TableColumn } from 'components/shared/Table';

export default class OrderTable extends Component {
  renderRows() {
    const { items } = this.props;
    return items.map(item => (
      <TableRow key={item.orderId}>
        <TableColumn><Link to={`/orders/edit/${item.orderId}`}>{item.orderId}</Link></TableColumn>
        <TableColumn>{item.orderName}</TableColumn>
      </TableRow>
    ));
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Name</TableColumn>
        </TableHeader>
        { this.renderRows() }
      </Table>
    );
  }
}

OrderTable.propTypes = {
  items: PropTypes.array
};
