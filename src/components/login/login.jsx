import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db} from "../../lib/firebase";


const Login = () => {
    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar = e =>{
        if(e.target.files[0]){
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }
}

    const handleLogin = e => {
        e.preventDefault()
    }
    const handleRegister = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const {username, email, password} = Object.fromEntries(formData);

        try{
            const res = await createUserWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }
    }
    return(
        <div className="login">
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password"/>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt=""/>
                        Upload an Image</label>
                    <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password"/>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login