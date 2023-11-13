import Note from '../../assets/cardImages/notescreenshot.png'
import { Link } from 'react-router-dom'

function CardNoteTaker() {
    return (
        <div class="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Link to='https://github.com/adam-brannon09/note_taker'>
                        <img src={Note} alt="screenshot" className="rounded-xl" />
                    </Link>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Note Taker</h2>
                    <p>Allows a user to create notes, read created notes, update existing notes, and delete notes. </p>
                    <div className="card-actions text-5xl my-3">
                        <i class="devicon-html5-plain colored"></i>
                        <i class="devicon-css3-plain colored"></i>
                        <i class="devicon-javascript-plain colored"></i>
                        <i class="devicon-nodejs-plain-wordmark colored"></i>
                        <i class="devicon-express-original-wordmark colored"></i>
                    </div>
                    {/* <div className="card-actions">
                        <button className="btn btn-success text-white">To The Repo</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default CardNoteTaker