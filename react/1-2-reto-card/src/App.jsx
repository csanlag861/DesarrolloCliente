import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import skills from "./data/data.js";
import Skill from "./components/Skill";
const App = () => {
  const avatar = {
    url: "img/card.webp",
    alt: "imagen de Card",
  };

  const intro = {
    title: "Card 1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
  return (
    <div className="container">
      <div className="border">
        <Avatar avatar={avatar} />
        <Intro intro={intro} />
        <div className="skills">
          {skills.map((itemSkill) => (
            <Skill skill={itemSkill} key={itemSkill.skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;