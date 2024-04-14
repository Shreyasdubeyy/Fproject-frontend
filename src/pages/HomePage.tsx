import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"
const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
         {/* (css till textbox ) */}
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Hungry? Order now!
            </h1>
            <span className="text-xl">Just a blink away</span>
        </div>

    {/* (css after textbox) */}
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} />
            <div className="flex flex-col items-center justfy-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                Faster orders!!
                </span>
                <span>
                    Download HungryBirds Official App
                </span>
                <img src={appDownloadImage} />

            </div>

        </div>
    </div>
  )
}

export default HomePage;