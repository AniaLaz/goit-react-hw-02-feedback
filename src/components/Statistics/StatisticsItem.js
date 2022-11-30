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
        <span>{valueGood + valueNeutral + valueBad}</span>
      </li>
      <li>
        Positsve feetback:
        <span>
          {Math.round(
            (valueGood * 100) / (valueGood + valueNeutral + valueBad)
          )}
          %
        </span>
      </li>
    </>
  );
};

export default StatisticsItem;
