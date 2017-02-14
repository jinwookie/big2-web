import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DashboardActions as Actions } from 'actions/dashboard';
import { dashboardSelector } from 'selectors/dashboard';
import { DashboardTable } from 'components/dashboard';
import { LoadingOverlay } from 'components/shared';

class Dashboard extends Component {
  static fetchData({ dispatch }) {
    return dispatch(Actions.getDashboard());
  }

  componentDidMount() {
    Dashboard.fetchData(this.props);
  }

  render() {
    const { isLoading, data } = this.props;

    return (
      <div>
        <header>
          <h1>BIG2</h1>
        </header>
        <LoadingOverlay isLoading={isLoading}>
          <DashboardTable dashboard={data} />
        </LoadingOverlay>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array
};

const mapStateToProps = state => {
  return {
    ...dashboardSelector(state)
  };
};

export default connect(mapStateToProps)(Dashboard);
