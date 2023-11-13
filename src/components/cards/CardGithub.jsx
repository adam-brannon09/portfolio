import Github from '../../assets/githubfinderscreen.png'

function CardGithub() {
    return (
        <div class="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={Github} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Github Finder</h2>
                    <p>React App that allows you to search for and view Github users, profiles, and recent repos. </p>
                    <div className="card-actions text-5xl">

                        <i className="devicon-react-original-wordmark colored"></i>

                        <i class="devicon-javascript-plain colored"></i>


                        <i class="devicon-tailwindcss-plain colored"></i>




                    </div>
                    <div className="card-actions">
                        <button className="btn btn-success text-white">To The Repo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardGithub