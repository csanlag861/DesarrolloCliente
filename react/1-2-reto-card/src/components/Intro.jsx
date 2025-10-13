const Intro = ({intro}) => {
    return (
        <div className="intro">
            <h1>{intro.title}</h1>
            <p>{intro.text}</p>
        </div>
    )
}

export default Intro;