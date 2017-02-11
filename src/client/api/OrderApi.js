import { OrdersStub } from 'stubs';
import StubApi from './StubApi';

export default class OrderApi extends StubApi {
  getOrders() {
    return super.get(OrdersStub);
  }

  getOrder(id) {
    const order = OrdersStub.find(order => order.orderId === id);
    return super.get(order);
  }
}
