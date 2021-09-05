import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

import './skills.css'

const Skills = () => {

    const { lightMode } = useContext(ThemeContext)

    return <div className={lightMode ? "mySkill" : "myDarkSkill"}>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
        </ol>
    </div>
}

export default Skills