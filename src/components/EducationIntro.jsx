import Education from '../assets/education.jpg'


function EducationIntro() {
    return (
        <div className="flex flex-row my-10">
            <div className="basis-1/2 ml-4">
                <img className='w-max ml-10 ' src={Education} alt="computer vector art" />
            </div>
            <div className='row container text-center mt-28'>
                <h1 className='font-semibold text-5xl'>Education</h1>
                <br />
                <br />
                <h2 className='font-semibold text-3xl'>Basic Qualifications and Certifications</h2>
                <br />
                <br />
                <p className='font-semibold text-slate-500 text-xl'>I actively create projects and puruse opportunities to learn <br /> new technologies. Below are my certifications.</p>
            </div>
        </div>
    )
}
export default EducationIntro