import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const UsernameMenu = () => {
    const {user,logout}=useAuth0();
  return(
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-amber-500">
            <CircleUserRound className="text-amber-500" /> 
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        
        <DropdownMenuItem>
                <Link to="/manage-restaurant" className="font-bold hover:text-amber-500">
                    Manage Restaurant
                </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
                <Link to="/user-profile" className="font-bold hover:text-amber-500">
                    User Profile
                </Link>
            </DropdownMenuItem>
            
            <Separator />
            <DropdownMenuItem>
                <Button 
                onClick={()=> logout()}
                className="flex flex-1 font-bold bg-amber-500">
                    Log Outside
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;