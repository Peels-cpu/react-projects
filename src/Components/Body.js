import Dominevo from './Images/dominevo.png';
import Romanfrig from './Images/romanfrig.png';
import Khepreetle from './Images/khepreetle.png';
import Meganeudra from './Images/meganeudra.png';
import Monking from './Images/monking.png';
import Craggon from './Images/craggon.png';
import Opawan from './Images/opawan.png';
import Polluvern from './Images/polluvern.png';
import Raival from './Images/raival.png';
import Skadire from './Images/skadire.png';
import Soarnox from './Images/soarnox.png';
import Triplydra from './Images/triplydra.png';
import { Link } from 'react-router-dom';




const Body = () => {
    return ( 
        <div className="body">
            
            <h2 style={{
                marginTop:'40px'
            }}>How well do you know your revomon?</h2>
            <h1 style={{
                marginTop:'40px',
                color:'yellow',
                textShadow:'red 1px 2px',
                
            }}>Choose your Revomon</h1>
            <div className="main">
                

                    <div className="revomonContainer">

                        <Link to='./Dominevo'><img src={Dominevo} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Romanfrig'><img src={Romanfrig} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Khepreetle'><img src={Khepreetle} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Meganeudra'><img src={Meganeudra} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Monking'><img src={Monking} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Craggon'><img src={Craggon} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Opawan'><img src={Opawan} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Polluvern'><img src={Polluvern} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Raival'><img src={Raival} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Skadire'><img src={Skadire} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Soarnox'><img src={Soarnox} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Triplydra'><img src={Triplydra} className="RevomonIcons" alt="logo" /></Link>
                    </div>





            </div>
            
        </div>
     );
}
 
export default Body;