import Ucf from '../assets/ucf-logo.8a0e70b8.png'
import { Link } from 'react-router-dom'

function EducationCard() {
    return (

        <div className='mb-9 lg:mt-20 xs:mt-10'>
            <h2 className='text-center text-4xl font-semibold ucf-card mb-8'>Major Education</h2>
            <div className="flex flex-row flex-wrap justify-center mt-16 mx-auto w-full items-center ">
                <div className=' flex-col inline-block xs:mb-10 lg:mr-10 border-2 border-success rounded-full shadow-sm'>
                    <img src={Ucf} className='w-44 p-5' alt="ucf emblem" />
                </div>


                <div className='flex-col border-2 border-success rounded-md shadow-xl'>
                    <div className=' bg-success h-fit '>
                        <div className='flex flex-wrap text-white pt-4 lg:justify-between xs:justify-around'>
                            <h2 className="inline ml-4 mr-9 font-semibold text-xl ">University of Central Florida</h2>
                            <h3 className='inline font-normal pr-5'>Feb 2023 - Aug 2023</h3>
                        </div>
                        <p className='p-4 font-semibold text-white xs:text-center lg:text-left'>Certificate in Full Stack Web Development</p>

                    </div>
                    <div className='my-5 p-5'>
                        <ul>
                            <li>⚡ A six month intensive bootcamp course of 240 contact hours.</li>
                            <li>⚡ Learned to work on multiple group projects integrating Git workflow.</li>
                            <li>⚡ Gained the skill to become a MERN stack developer, creating various deployed websites with databases.</li>
                        </ul>
                        <br />
                        <Link to='https://badgr.com/public/assertions/_LRh7L3XRQiNI82qNKXufQ' className='btn btn-success text-white font-normal mb-8 justify-self-end'>View Certificate</Link>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default EducationCard