import Github from '../../assets/cardImages/githubfinderscreen.png'
import { Link } from 'react-router-dom'

function CardGithub() {
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Link to='https://github.com/adam-brannon09/github-finder'>
                        <img src={Github} alt="Shoes" className="rounded-xl" />
                    </Link>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Github Finder</h2>
                    <p>React App that allows you to search for and view Github users, profiles, and recent repos. </p>
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
export default CardGithub