import CodingImg from '../assets/Developper_01__Converted__generated.jpg'



function About() {
    return (
        <div className="about mb-9">
            <div className='text-center mb-32'>
                <h1 className="text-5xl font-semibold">Here's what I do</h1>
            </div>

            <div className="flex flex-row">
                <div className='col basis-1/2 mr-2'>
                    <img src={CodingImg} className="w-full" alt="" />
                </div>
                <div className=" flex-col text-center mx-8">
                    <h1 className='text-5xl'>Full Stack Development</h1>
                    <br />
                    <br />
                    <section className='row'>
                        <div className='flex text-7xl text-center justify-between'>
                            <i class="devicon-html5-plain colored"></i>
                            <i class="devicon-css3-plain-wordmark colored"></i>
                            <i class="devicon-javascript-plain colored"></i>
                            <i class="devicon-react-original-wordmark colored"></i>
                            <i class="devicon-tailwindcss-plain colored"></i>
                            <i class="devicon-bootstrap-plain colored"></i>
                        </div>
                        <br />
                        <div className="flex justify-around text-7xl text-center">
                            <i class="devicon-nodejs-plain-wordmark colored"></i>
                            <i class="devicon-express-original-wordmark colored"></i>
                            <i class="devicon-npm-original-wordmark colored"></i>
                            <i class="devicon-mongodb-plain-wordmark colored"></i>
                            <i class="devicon-mysql-plain colored"></i>
                            <i class="devicon-git-plain colored"></i>
                        </div>
                    </section>
                    <br />
                    <div className=''>
                        <ul className='text-xl text-slate-500 mt-6 '>
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