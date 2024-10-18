import { Button } from "./Button";

const Content = ({ handleSumGood, handleSumNeutral, handleSumBad }) => {
  return (
    <>
    <Button handle={handleSumGood} text={"good"} />
    <Button handle={handleSumNeutral} text={"neutral"} />
    <Button handle={handleSumBad} text={"bad"} />
    </>
  );
};

export { Content };
