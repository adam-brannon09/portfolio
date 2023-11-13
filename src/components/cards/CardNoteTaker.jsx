import Note from '../../assets/notescreenshot.png'

function CardNoteTaker() {
    return (
        <div class="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={Note} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Note Taker</h2>
                    <p>Allows a user to create notes, read created notes, update existing notes, and delete notes. </p>
                    <div className="card-actions">icons</div>
                    <div className="card-actions">

                        <button className="btn btn-success text-white">To The Repo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardNoteTaker