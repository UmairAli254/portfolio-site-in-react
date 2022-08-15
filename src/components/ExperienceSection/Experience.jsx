import "./Experience.css";
import Circle from "./Circle/Circle";

export default function Experience() {
  return (
    <div className='experienceSection' id="experienceSection">
      
      <Circle Number={4} FirstText={"Years"} SecondText={"Experience"} />
      <Circle Number={40} FirstText={"Completed"} SecondText={"Projects"} />
      <Circle Number={5} FirstText={"Attached"} SecondText={"Companies"} />

    </div>
  )
}
