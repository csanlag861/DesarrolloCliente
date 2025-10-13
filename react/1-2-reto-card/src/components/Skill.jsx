const Skill = ({skill}) => {
    const styleSkill = {
        backgroundColor: skill.color,
        width: "200px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.8rem",
    }
    return (
        <div style={styleSkill}>
            <div className="skill-text">
                <h3>{skill.skill}</h3>
                <p>{skill.level == "advanced" ? "😎" : skill.level == "intermediate" ? "🙂" : "😭"}</p>
            </div>
        </div>
    )
}

export default Skill;