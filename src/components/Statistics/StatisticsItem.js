const StatisticsItem = ({ valueGood, valueNeutral, valueBad }) => {
  return (
    <>
      <li>
        Good:
        <span>{valueGood}</span>
      </li>
      <li>
        Neutral:
        <span>{valueNeutral}</span>
      </li>
      <li>
        Bad:
        <span>{valueBad}</span>
      </li>
      <li>
        Total:
        <span>0</span>
      </li>
      <li>
        Positsve feetback:
        <span>0%</span>
      </li>
    </>
  );
};

export default StatisticsItem;
