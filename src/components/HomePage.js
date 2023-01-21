import Style from './Style.css';
import Navbar from './Navbar';
import Frontpage from './Frontpage';
export const Home = () => {
    return(
        <>
        <header className='heading' style={Style}>
            <Navbar/>
        </header>
        <Frontpage/>
        </>
    )
}