import { Part } from "./Part";

const Content = ({course}) => {
    
  return (
    <>
      <Part part={course.parts[0].name} exercise={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercise={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercise={course.parts[2].exercises} />
    </>
  );
};

export { Content };
