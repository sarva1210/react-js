const StatsCard = ({ title, count, active, onClick }) => {
  return (
    <div
      className={`stats-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <p>{title}</p>
      <h3>{count}</h3>
    </div>
  );
};

export default StatsCard;
