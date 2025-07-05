import React from "react";
import { User, LogOut, Car } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  onProfileClick?: () => void;
  onMyRidesClick?: () => void;
  onLogoutClick?: () => void;
}

const Navbar = ({
  onProfileClick = () => {},
  onMyRidesClick = () => {},
  onLogoutClick = () => {},
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-green-600 text-white shadow-md z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Car className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">CarpoolHub</span>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-green-700 flex items-center"
            onClick={onProfileClick}
          >
            <User className="h-5 w-5 mr-2" />
            Profile
          </Button>

          <Button
            variant="ghost"
            className="text-white hover:bg-green-700 flex items-center"
            onClick={onMyRidesClick}
          >
            <Car className="h-5 w-5 mr-2" />
            My Rides
          </Button>

          <Button
            variant="ghost"
            className="text-white hover:bg-green-700 flex items-center"
            onClick={onLogoutClick}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Log out
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
