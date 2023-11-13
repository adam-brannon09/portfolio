import ProjectPic from '../assets/free-digital-media-vector-illustration.jpg'

function ProjectsIntro() {
    return (
        <div className='flex flex-row my-10'>
            <div className="basis-1/2 ml-4">
                <img className='w-full ml-10' src={ProjectPic} alt="" />
            </div>
            <div className='row container text-center mt-9'>
                <h1 className='font-semibold text-5xl'>Projects</h1>
                <br />
                <br />
                <p className='font-semibold leading-9'>My projects make use of a vast variety of latest technology tools. <br /> My best experience is in creating React Projects.  Below are some of my projects.</p>
            </div>


        </div>
    )
}
export default ProjectsIntro