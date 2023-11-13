import GoogleBooks from '../../assets/googlebooks.png'

function CardGoogleBooks() {
    return (
        <div class="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={GoogleBooks} alt="Screenshot" className="rounded-xl border-2" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Google Books Search</h2>
                    <p>MERN Stack search engine that allows user to create an account, search for books, and save books to a database. </p>
                    <div className="card-actions text-5xl">

                        <i class="devicon-mongodb-plain-wordmark colored"></i>

                        <i class="devicon-express-original-wordmark colored"></i>

                        <i class="devicon-graphql-plain-wordmark colored"></i>

                        <i class="devicon-react-original colored"></i>

                        <i class="devicon-nodejs-plain-wordmark colored"></i>






                    </div>
                    <div className="card-actions">

                        <button className="btn btn-success text-white">To The Repo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardGoogleBooks