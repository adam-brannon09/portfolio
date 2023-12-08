import Note2 from '../../assets/cardImages/note2.png'
import { Link } from 'react-router-dom'


function CardNoteV2() {
    return (

        <div className="xs:mt-6 lg:mt-0">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Link to='https://github.com/adam-brannon09/note_taker_2'>
                        <img src={Note2} alt="screenshot" className="rounded-xl border-2" />
                    </Link>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Note Taker 2</h2>
                    <p>An alternative to the first Note Taker app. Uses Google Firebase and Firestore for user authentication and database. </p>
                    <div className="card-actions text-5xl">
                        <i class="devicon-react-original-wordmark colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i class="devicon-tailwindcss-plain colored"></i>
                        <i class="devicon-firebase-plain-wordmark colored"></i>




                    </div>
                    {/* <div className="card-actions">
                        <button className="btn btn-success text-white">To The Repo</button>
                    </div> */}
                </div>
            </div>
        </div>

    )
}
export default CardNoteV2