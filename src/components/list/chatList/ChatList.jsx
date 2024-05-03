import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/addUser";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return(
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search"></input>
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="plus" className="plus" onClick={()=>setAddMode(prev=> !prev)}></img>
            </div>
            <div className="item">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Adiaparmar</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Adiaparmar</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Adiaparmar</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt=""/>
                <div className="texts">
                    <span>Adiaparmar</span>
                    <p>Hello</p>
                </div>
            </div>
            {addMode && <AddUser/>}
        </div>
    )
}

export default ChatList