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
import Azuron from './Images/azuron.png';
import Leximinth from './Images/leximinth.png';
import Furnice from './Images/furnice.png';
import Moomega from './Images/moomega.png';
import Murdoll from './Images/murdoll.png';
import Nightmort from './Images/nightmort.png';
import Raftnesse from './Images/raftnesse.png';
import Revup from './Images/revup.png';
import Spectreat from './Images/spectreat.png';
import { Link } from 'react-router-dom';




const Body = () => {
    return ( 
        <div className="body">
            
            <h2 style={{
                marginTop:'40px'
            }}>How well do you know your revomon?</h2>
            <p>Each question has a 10 second timer, so answer quicky.</p>
            <h1 style={{
                marginTop:'40px',
                color:'yellow',
                textShadow:'red 1px 2px',
                
            }}>Choose your Revomon</h1>
            <div className="main">
                

                    <div className="revomonContainer">
                        <Link to='./Azuroon'><img src={Azuron} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Furnice'><img src={Furnice} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Leximinth'><img src={Leximinth} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Moomega'><img src={Moomega} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Murdoll'><img src={Murdoll} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Raftnesse'><img src={Raftnesse} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Revup'><img src={Revup} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Nightmort'><img src={Nightmort} className="RevomonIcons" alt="logo" /></Link>
                        <Link to='./Spectreat'><img src={Spectreat} className="RevomonIcons" alt="logo" /></Link>
                        {/* finished */}
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