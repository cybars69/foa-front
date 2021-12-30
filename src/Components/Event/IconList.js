import './IconList.css'

function IconList({id,icon,title,active, setselected}) {
    return (
        <div className="three-icons-block " 
        onClick={() => setselected(id)}
        >
            <div className={ active ? "event-icon active1" : 'event-icon'}>{icon}</div>
            <p className={ active ? "p active1" : 'p'}>{title}</p>
        </div>
    )
}

export default IconList
