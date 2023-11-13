import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import ContactImg from '../assets/contactImg.jpeg'
function ContactMe() {
    return (
        <div className="flex flex-row mx-9 contact mb-40">
            <div className="basis-1/2">
                <img src={ContactImg} className="ml-10" alt="contact image vector art" ></img>
            </div>
            <div className="justify-center container text-center mt-10">
                <h1 className="text-5xl font-semibold">Contact Me</h1>
                <p className="text-lg text-slate-400 font-bold my-7">You can contact me at the places mentioned below. <br /> I will get back to you as fast as I can.</p>
                <ul className='flex justify-center mt-5 text-4xl '>
                    <li className='ml-3 text-4xl'><Link to='https://github.com/adam-brannon09'><FaGithub /></Link></li>
                    <li className='ml-3 text-4xl' style={{ color: "#105397" }}><Link to='https://www.linkedin.com/in/adam-brannon2022/'><FaLinkedin /></Link></li>
                    <li className='ml-3 text-4xl text-slate-500'><Link to='mailto:adam.brannon09@icloud.com' ><FaEnvelope /></Link></li>
                    <li className='ml-3 text-4xl' style={{ color: "#0866FF" }}><Link to='https://www.facebook.com/adam.brannon.9'><FaFacebook /></Link></li>
                </ul>
                <button className='btn btn-success btn-wide hover:shadow-xl text-white ml-5 mt-9'>See My Resume</button>
            </div>
        </div>
    )
}
export default ContactMe