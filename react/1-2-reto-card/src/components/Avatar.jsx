const avatar = ({avatar}) => {
    return (
        <div className="imagen">
            <img src={avatar.url} alt={avatar.alt} />
        </div>
    )
}

export default avatar;