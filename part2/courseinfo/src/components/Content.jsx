import { Part } from "./Part";

const Content = ({course}) => {
   
    
  return (
    <>
      {course.parts.map((part)=> (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
      
    </>
  );
};

export { Content };
