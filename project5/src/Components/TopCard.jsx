import Clock from "./Clock";

const TopCard = () => {
  return (
    <div className="top-card">
      <div>
        <h1>Task Manager</h1>
        <p>What are you doing today?</p>
      </div>
      <Clock />
    </div>
  );
};

export default TopCard;
