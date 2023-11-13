import FCP from '../../assets/cardImages/fcpscreenshot.png'
import { Link } from 'react-router-dom'


function CardPreschool() {
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Link to='https://github.com/adam-brannon09/first-christian-preschool'>
                        <img src={FCP} alt="screenshot" className="rounded-xl border-2" />
                    </Link>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">First Christian Preschool</h2>
                    <p>A new site for First Christian Preschool in Defuniak Springs, FL. *Still in development. </p>
                    <div className="card-actions text-5xl">
                        <i className="devicon-react-original-wordmark colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-tailwindcss-plain colored"></i>
                    </div>
                    {/* <div className="card-actions">
                        <button className="btn btn-success text-white">To The Repo</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default CardPreschool