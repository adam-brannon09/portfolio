import ProjectPic from '../assets/free-digital-media-vector-illustration.jpg'

function ProjectsIntro() {
    return (
        <div className="lg:mt-40 xs:mt-12 ">

            {/* vector art */}
            <div className="flex flex-row lg:ml-16 xs:justify-center xs:mx-2 ">
                <div className='col basis-1/2 mx-auto max-[800px]:hidden'>
                    <img src={ProjectPic} className="w-5/6 " alt="development vector art" />
                </div>
                {/* dev details right side */}
                <div className=" col basis-1/2">
                    <section className='row text-center w-11/12 lg:mt-16'>
                        <h1 className='font-semibold xs:text-3xl lg:text-5xl '>Projects</h1>
                        <br />
                        <p className='text-slate-400 font-semibold leading-9 xs:text-lg xs:w-screen lg:w-11/12'>My projects make use of a vast variety of the latest technology and tools. My best experience is in creating React Projects.  Below are some of my projects.</p>
                    </section>
                    <br />
                </div>
            </div>
        </div>
    )
}
export default ProjectsIntro