import CardGithub from "./cards/CardGithub"
import CardWeather from "./cards/CardWeather"
import CardGoogleBooks from "./cards/CardGoogleBooks"
import CardNoteTaker from "./cards/CardNoteTaker"
import CardQuiz from "./cards/CardQuiz"
import CardPreschool from "./cards/CardPreschool"



function ProjectCards() {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-evenly ">
                <CardGithub />
                <CardWeather />
                <CardGoogleBooks />
            </div>
            <div className="flex flex-row flex-wrap justify-evenly mt-7">
                <CardPreschool />
                <CardNoteTaker />
                <CardQuiz />
            </div>
        </>
    )
}
export default ProjectCards