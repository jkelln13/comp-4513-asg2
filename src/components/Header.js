import About from './About'
import { Link } from 'react-router-dom';

const Header = props => {

    return (
        <header class="flex justify-between items-center bg-blue-300 rounded-b-xl">
            <Link to='/'>
                <img class="mx-2 my-2" width="60" height="60" src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Film-icon.png" alt="logo"></img>
            </Link>
            <About />
        </header>
    )


}

export default Header