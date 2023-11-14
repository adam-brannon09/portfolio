import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Picture from './Picture'

function Intro() {
    return (
        <div className="flex flex-wrap xs:w-full xs:mt-12 lg:mt-0">
            {/* hello world */}
            <div className='lg:basis-3/6  lg:mx-20 xs:ml-20 xs:w-max lg:mt-40'>
                <h1 className='  xs:text-3xl lg:text-6xl font-semibold '>Hello World 👋!</h1>
                <br />
                <p className='text-3xl text-slate-500 w-4/5 max-[600px]:text-2xl'>My name is <span className='text-success font-bold'>Adam Brannon</span>. Full Stack Developer, Follower of Tech, Problem Solver. Lifelong Learner. </p>
                <br />
                <div>
                    <ul className='flex text-4xl ml-5'>
                        <li className='ml-3 text-4xl'><Link to='https://github.com/adam-brannon09'><FaGithub /></Link></li>
                        <li className='ml-3 text-4xl' style={{ color: "#105397" }}><Link to='https://www.linkedin.com/in/adam-brannon2022/'><FaLinkedin /></Link></li>
                        <li className='ml-3 text-4xl text-slate-500'><Link to='mailto:adam.brannon09@icloud.com' ><FaEnvelope /></Link></li>
                        <li className='ml-3 text-4xl' style={{ color: "#0866FF" }}><Link to='https://www.facebook.com/adam.brannon.9'><FaFacebook /></Link></li>
                    </ul>
                    <br />
                    <Link to='/contact' className='btn btn-success btn-wide text-white hover:shadow-xl ml-5 mt-5 xs:mx-auto'>Contact Me</Link>
                </div>

            </div>
            {/* headshot */}

            <div className='flex-auto xs:mt-20 lg:mt-10'>
                <Picture />
            </div>

        </div>
    )
}
export default Intro