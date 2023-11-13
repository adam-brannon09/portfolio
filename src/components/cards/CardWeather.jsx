import Weather from '../../assets/weatherscreenshot.png'



function CardWeather() {
    return (
        <div class="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={Weather} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Weather App</h2>
                    <p>React App that allows you to search for and view weather information for a selected area. </p>
                    <div className="card-actions">icons</div>
                    <div className="card-actions">

                        <button className="btn btn-success text-white">To The Repo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardWeather