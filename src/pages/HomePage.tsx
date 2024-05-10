import landingImage from "../assets/landing.png"
//import appDownloadImage from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import appimage from "../assets/App-Store-Logo1-PNG-HD-Image.png"

const HomePage = () => {

    const navigate = useNavigate();
    
    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
          pathname: `/search/${searchFormValues.searchQuery}`,
        });
      };

  return(
    <div className="flex flex-col gap-12">
         {/* (css till textbox ) */}
        <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-amber-600">
                Hungry? Order now!
            </h1>
            <span className="text-xl">Just a blink away</span>
            <SearchBar placeHolder = "Search by city or town" onSubmit={handleSearchSubmit} />
        </div>

    {/* (css after textbox) */}
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} className="rounded-2xl"/>
            <div className="flex flex-col items-center justfy-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                Faster orders!!
                </span>
                <span>
                    Download SnappyMeals Official App
                </span>
                <Link to="https://play.google.com/store">
                <img src={appimage} />
                </Link>
            </div>

        </div>
    </div>
  )
}

export default HomePage;