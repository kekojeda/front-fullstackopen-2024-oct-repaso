import { StaticLine } from "./StatisticLine";

const Statics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avg = (good - bad) / total;
  const pos = good / total;

  if (total) {
    return (
      <>
        <h1>Statics</h1>

        <table>
          <tbody>
            <StaticLine text={"good"} value={good} />
            <StaticLine text={"neutral"} value={neutral} />
            <StaticLine text={"bad"} value={bad} />
            <StaticLine text={"total"} value={total} />
            <StaticLine text={"average"} value={avg} />
            <StaticLine text={"positive"} value={pos} />
          </tbody>
        </table>
      </>
    );
  } else {
    return <h2>No feedback given</h2>;
  }
};

export { Statics };
