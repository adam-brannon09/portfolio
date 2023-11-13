import { FaGithub, FaLinkedinIn, FaFacebook, FaEnvelope } from 'react-icons/fa'
import Picture from './Picture'

function Intro() {
    return (
        <div className="flex flex-row">
            <div className='basis-1/2 ml-8 mt-8 hello'>
                <h1 className='text-6xl font-semibold'>Hello World 👋!</h1>
                <br />
                <p className='text-3xl text-slate-500'>My name is <span className='text-success font-bold'>Adam Brannon</span>. Full Stack Developer, Follower of Tech, Problem Solver. Lifelong Learner. </p>
                <br />
                <div className=''>
                    <ul className='flex'>
                        <li className='ml-3 '><a href='https://github.com/adam-brannon09' className="text-4xl"><FaGithub /></a></li>
                        <li className='ml-3'><a href='https://www.linkedin.com/in/adam-brannon2022/' className="text-4xl" style={{ color: "#105397" }}><FaLinkedinIn /></a></li>
                        <li className='ml-3'><a href='mailto:adam.brannon09@icloud.com' className="text-4xl text-slate-500" ><FaEnvelope /></a></li>
                        <li className='ml-3'><a href='https://www.facebook.com/adam.brannon.9' className="text-4xl" style={{ color: "#0866FF" }}><FaFacebook /></a></li>
                    </ul>
                    <br />
                    <button className='btn  ml-5'>Contact Me</button>
                </div>

            </div>

            <div className='basis-1/3 ml-10'><Picture /></div>

        </div>
    )
}
export default Intro