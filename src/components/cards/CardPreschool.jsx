import FCP from '../../assets/fcpscreenshot.png'

function CardPreschool() {
    return (
        <div class="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={FCP} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">First Christian Preschool</h2>
                    <p>A new site for First Christian Preschool in Defuniak Springs, FL. *Still in development. </p>
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
export default CardPreschool