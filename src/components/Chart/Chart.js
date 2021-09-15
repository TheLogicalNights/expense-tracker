import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((data) => data.value);
  const maxValue = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
