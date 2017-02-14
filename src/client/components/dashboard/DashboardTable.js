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
          <div>Total: <strong>{ player.total }</strong></div>
          <div>Games Played: <strong>{ player.games }</strong></div>
          <div>Average: <strong>{ Math.round((player.total / player.games) * 100) / 100 }</strong></div>
        </div>
      )
    }
  </div>;

DashboardTable.propTypes = {
  dashboard: PropTypes.array
};

export default DashboardTable;
