import DevImg from '../assets/devImage.jpg'

function About() {
    return (
        <div className="mt-40">
            <div className='text-center mb-32'>
                {/* title */}
                <h1 className="text-5xl font-semibold">Here's what I do</h1>
            </div>
            {/* vector art */}
            <div className="flex flex-row">
                <div className='col basis-1/2 mr-2 xs:hidden lg:inline-block'>
                    <img src={DevImg} className="w-full" alt="development vector art" />
                </div>
                {/* dev details right side */}
                <div className=" flex-col  mx-auto">
                    <h1 className='text-5xl text-center'>Full Stack Development</h1>
                    <br />
                    <br />
                    <section className='row'>
                        <div className='flex text-6xl text-center justify-between'>
                            <i className="devicon-html5-plain colored"></i>
                            <i className="devicon-css3-plain-wordmark colored"></i>
                            <i className="devicon-javascript-plain colored"></i>
                            <i className="devicon-react-original-wordmark colored"></i>
                            <i className="devicon-tailwindcss-plain colored"></i>
                            <i className="devicon-bootstrap-plain colored"></i>
                        </div>
                        <br />
                        <div className="flex justify-around text-6xl text-center">
                            <i className="devicon-nodejs-plain-wordmark colored"></i>
                            <i className="devicon-express-original-wordmark colored"></i>
                            <i className="devicon-npm-original-wordmark colored"></i>
                            <i className="devicon-mongodb-plain-wordmark colored"></i>
                            <i className="devicon-mysql-plain colored"></i>
                            <i className="devicon-git-plain colored"></i>
                        </div>
                    </section>
                    <br />
                    <div className=''>
                        <ul className=' text-slate-500 mt-6 xs:mx-auto xs:text-center lg:text-start'>
                            <li>⚡  Designing visually appealing and user-friendly interfaces for web and mobile applications</li>
                            <br />
                            <li>⚡ Implementing responsive and dynamic front-end solutions with proficiency in ReactJS</li>
                            <br />
                            <li>⚡ Developing robust back-end systems using Node.js and Express for seamless application functionality
                            </li>
                            <br />
                            <li>⚡ Database management, including MongoDB and MySQL for efficient data storage and retrieval</li>
                            <br />
                            <li>⚡ Structuring and optimizing APIs with a focus on REST standards for enhanced communication within applications</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About