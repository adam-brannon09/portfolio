import ProjectPic from '../assets/free-digital-media-vector-illustration.jpg'

function ProjectsIntro() {
    return (
        <div className='flex flex-row flex-wrap justify-evenly project'>
            <div className="basis-2/5 ml-4">
                <img className='w-4/5 ml-10 shadow-xl' src={ProjectPic} alt="project vector art" />
            </div>
            <div className='row container w-1/3 text-center mt-9 '>
                <h1 className='font-semibold text-5xl'>Projects</h1>
                <br />
                <br />
                <p className='text-slate-400 font-semibold leading-9'>My projects make use of a vast variety of the latest technology and tools. My best experience is in creating React Projects.  Below are some of my projects.</p>
            </div>


        </div>
    )
}
export default ProjectsIntro