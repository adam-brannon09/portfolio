import Quiz from '../../assets/cardImages/quizscreenshot.png'
import { Link } from 'react-router-dom'


function CardQuiz() {
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <Link to='https://github.com/adam-brannon09/coding_quiz'>
                        <img src={Quiz} alt="Shoes" className="rounded-xl border-2" />
                    </Link>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Quiz App</h2>
                    <p>Simple application to quiz users on multiple choice questions. Has a timer and leaderboard. </p>
                    <div className="card-actions  text-5xl">
                        <i className="devicon-html5-plain colored"></i>
                        <i className="devicon-css3-plain colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                    </div>
                    {/* <div className="card-actions">
                        <button className="btn btn-success text-white">To The Repo</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default CardQuiz