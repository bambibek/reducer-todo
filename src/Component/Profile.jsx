import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
import './profile.css'

const Profile = () => {

    const { lightMode } = useContext(ThemeContext)
    console.log(lightMode)


    return <div className={lightMode ? "myProfile" : "myDarkProfile"}>
        <h2>Name: John Doe</h2>
        <h2>Email: JD@wts.com</h2>
    </div>
}
export default Profile