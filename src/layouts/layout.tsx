import Hero from "@/components/Hero";
import Header from "../components/Header";
import Footer from "@/components/Footer";

type Props = {
    children: React.ReactNode; //(type of children)
    showHero?: boolean;
}
const Layout =({ children, showHero = false }: Props) => {
    return (
        //(flexbox so div takes entire) space
        <div className="flex flex-col min-h-screen"> 
            <Header />
            { showHero && <Hero /> }
            
            {/* (for spacing) */}
            <div className="container mx-auto flex-1 py-10">
                {children}
            </div>
            <Footer />
        </div>
    )

}

export default Layout;
