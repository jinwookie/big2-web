import { PropTypes } from 'react';
import './DashboardTable.css';

const DashboardTable = ({
  dashboard
}) =>
  <div className="dashboard-table">
    {
      dashboard.map((player, index) =>
        <div key={index} className="dashboard-player">
          <h2>{ `${player.firstname} ${player.lastname}` }</h2>
          <div className="dashboard-stats">
            <div><span>Total:</span> <strong>{ player.total }</strong></div>
            <div><span>Games Played:</span> <strong>{ player.games }</strong></div>
            <div><span>Average:</span> <strong>{ Math.round((player.total / player.games) * 100) / 100 }</strong></div>
          </div>
        </div>
      )
    }
  </div>;

DashboardTable.propTypes = {
  dashboard: PropTypes.array
};

export default DashboardTable;
