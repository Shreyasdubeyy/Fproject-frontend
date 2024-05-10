import { Link } from "react-router-dom";

const Footer = () => {
return(
  <div className="bg-amber-500 py-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
       <Link to = "/">
       <span className="text-2xl text-white font-bold tracking-tight">
            SnappyMeals.In
        </span>
       </Link>
        <br/>
        <span className="text-white font-bold tracking-tight flex gap-4">
        <Link to="#">
            <span className="hover:underline me-4 md:me-5">Contacts</span>
            </Link>
            <Link to="#">
            <span className="hover:underline me-4 md:me-6">About</span>
            </Link>
            <Link to="https://redirection.io/privacy-policy">
            <span className="hover:underline me-4 md:me-6">Privacy Policy</span>
            </Link>
            <Link to="https://redirection.io/terms-of-use">
            <span className="hover:underline me-1 md:me-6">Terms of Service</span>
            </Link>
        </span>
    </div>
  </div>
);
};


export default Footer;