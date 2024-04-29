import Button from "./Button"
import './css/hero.css'

const Hero= ()=>{

    
    return(
        <>
        <div id="hero">
            <div className="topmost">
                <h1 className="adut">TAYOR SWIFT</h1>
                 <h2 className="adut">(TAYLOR&apos;S EDITION)</h2>

                <p className="aduts">includes &quot;cardigan&quot; and four accoustic songs.</p>
                <p className="gold">now streaming on disney+.</p>

                <Button brand="Subscribe now*"/>
            </div>
        </div>
            
        </>
    )   
}

export default Hero