import { FaGithub, FaLinkedinIn, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Picture from './Picture'

function Intro() {
    return (
        <div className="flex flex-row flex-wrap">
            <div className='w-1/2 ml-8 mt-8 hello'>
                <h1 className='text-6xl font-semibold'>Hello World 👋!</h1>
                <br />
                <p className='text-3xl text-slate-500'>My name is <span className='text-success font-bold'>Adam Brannon</span>. Full Stack Developer, Follower of Tech, Problem Solver. Lifelong Learner. </p>
                <br />
                <div>
                    <ul className='flex text-4xl ml-5'>
                        <li className='ml-3 text-4xl'><Link to='https://github.com/adam-brannon09'><FaGithub /></Link></li>
                        <li className='ml-3 text-4xl' style={{ color: "#105397" }}><Link to='https://www.linkedin.com/in/adam-brannon2022/'><FaLinkedin /></Link></li>
                        <li className='ml-3 text-4xl text-slate-500'><Link to='mailto:adam.brannon09@icloud.com' ><FaEnvelope /></Link></li>
                        <li className='ml-3 text-4xl' style={{ color: "#0866FF" }}><Link to='https://www.facebook.com/adam.brannon.9'><FaFacebook /></Link></li>
                    </ul>
                    <br />
                    <button className='btn btn-success btn-wide text-white hover:shadow-xl ml-5 mt-5'>Contact Me</button>
                </div>

            </div>

            <div className='w-1/3 ml-10'><Picture /></div>

        </div>
    )
}
export default Intro