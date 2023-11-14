import ProjectPic from '../assets/free-digital-media-vector-illustration.jpg'

function ProjectsIntro() {
    return (
        // <div className='mt-20 mx-32'>
        //     <div className='flex  flex-row'>
        //         {/* vector art */}
        //         <div className="basis-1/3 flex-col flex-auto ">
        //             <img className='w-4/5 shadow-xl' src={ProjectPic} alt="project vector art" />
        //         </div>
        //         <div className='flex-col w-2/5 text-center mt-9 '>
        //             <h1 className='font-semibold text-5xl'>Projects</h1>
        //             <br />
        //             <br />
        //             <p className='text-slate-400 font-semibold leading-9'>My projects make use of a vast variety of the latest technology and tools. My best experience is in creating React Projects.  Below are some of my projects.</p>
        //         </div>
        //     </div>
        // </div>
        <div className="mt-40">

            {/* vector art */}
            <div className="flex flex-row mx-32">
                <div className='col basis-1/2 mr-2 max-[700px]:hidden'>
                    <img src={ProjectPic} className="w-5/6 " alt="development vector art" />
                </div>
                {/* dev details right side */}
                <div className=" col basis-1/2">
                    <section className='row text-center w-11/12'>
                        <h1 className='font-semibold text-5xl'>Projects</h1>
                        <p className='text-slate-400 font-semibold leading-9 shrink-0 max-[700px]:text-xl'>My projects make use of a vast variety of the latest technology and tools. My best experience is in creating React Projects.  Below are some of my projects.</p>
                    </section>
                    <br />

                </div>
            </div>
        </div>
    )
}
export default ProjectsIntro