import "./StatsCard.css";

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="stats-card">
      <div
        className="stats-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default StatsCard;