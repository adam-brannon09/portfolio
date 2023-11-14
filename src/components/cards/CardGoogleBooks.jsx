import GoogleBooks from '../../assets/cardImages/googlebooks.png'
import { Link } from 'react-router-dom'

function CardGoogleBooks() {
    return (
        <div className="xs:mt-6 lg:mt-0">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <Link to='https://github.com/adam-brannon09/google_books_api'>
                        <img src={GoogleBooks} alt="screenshot" className="rounded-xl border-2" />
                    </Link>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Google Books Search</h2>
                    <p>MERN Stack search engine that allows user to create an account, search for books, and save books to a database. </p>
                    <div className="card-actions text-5xl">
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-mongodb-plain-wordmark colored"></i>
                        <i className="devicon-graphql-plain-wordmark colored"></i>
                        <i className="devicon-nodejs-plain-wordmark colored"></i>
                        <i className="devicon-express-original-wordmark colored"></i>
                    </div>
                    {/* <div className="card-actions">
                        <button className="btn btn-success text-white">To The Repo</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default CardGoogleBooks