import { auth } from "../../lib/firebase"
import "./detail.css"

const Detail = () => {
    return(
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt=""/>
                <h2>Adiaparmar</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Phtots</span>
                        <img src="./arrowDown.png" alt=""/>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://images.unsplash.com/photo-1713815540105-9cc73ccd4290?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                            <span>photo2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://images.unsplash.com/photo-1713815540105-9cc73ccd4290?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                            <span>photo2024.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                    
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt=""/>
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout" onClick={() => auth.signOut()}>Logout</button>
                </div>
        </div>
    )
}

export default Detail