import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } =useAuth0();
  return(
    <Sheet>
        <SheetTrigger>
            <Menu className="text-amber-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3" >
            <SheetTitle>
                  {isAuthenticated ? (
                    <span className="flex items-center font-bold gap-2">
                        <CircleUserRound className="text-amber-500" />
                        {user?.email}
                    </span> 
                    ) : (
                        <span>Welcome to SnappyMeals</span>
                    )}
            </SheetTitle>
            <Separator/>
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                    <MobileNavLinks />
                     ) : (
                     <Button className="flex-1 font-bold bg-amber-500"
                        onClick={async () => await loginWithRedirect()}
                    >Log in</Button>
                    )}
                </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;