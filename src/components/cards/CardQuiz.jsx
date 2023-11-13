import Quiz from '../../assets/quizscreenshot.png'

function CardQuiz() {
    return (
        <div class="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={Quiz} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Quiz App</h2>
                    <p>Simple application to quiz users on multiple choice questions. Has a timer and leaderboard. </p>
                    <div className="card-actions  text-5xl">
                        <i class="devicon-html5-plain colored"></i>
                        <i class="devicon-css3-plain colored"></i>
                        <i class="devicon-javascript-plain colored"></i>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-success text-white">To The Repo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardQuiz