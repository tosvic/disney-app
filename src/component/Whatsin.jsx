import './css/whatsin.css'
import Button from "./Button"
import TypeList from './Input'

const Whatsin = ()=>{

   
    const type= [
        {img: '../../src/assets/scale.png', name: 'The Marvel'},
        {img: '../../src/assets/iwaju.jpg', name: 'Iwaju'},
        {img: '../../src/assets/scale.webp', name: 'Percy Jackson and the Olympians'}
    ]

    return(
        <>
        <div className='warri'>
            <h2>What &apos; s on Disney+</h2>

            <span>
                <div className='gay'>
                    <TypeList types={type} />
                </div>
            </span>

            
            <Button id="idy" brand="Subscribe now*"/>
            <p>*Terms and Condtion Apply | Plan start from just </p>
        </div>


           
        </>
    )
}

export default Whatsin