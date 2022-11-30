import StatisticsItem from "./StatisticsItem"

const Statistics = ({ valueGood, valueNeutral, valueBad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <StatisticsItem
          valueGood={valueGood}
          valueNeutral={valueNeutral}
          valueBad={valueBad}
        />
      </ul>
    </div>
  );
};

export default Statistics;