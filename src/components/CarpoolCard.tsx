import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users } from "lucide-react";

interface CarpoolCardProps {
  driver: {
    name: string;
    avatar: string;
    rating: number;
  };
  route: {
    origin: string;
    destination: string;
  };
  departureTime: string;
  availableSeats: number;
  price: number;
  onRequestRide?: () => void;
}

const CarpoolCard = ({
  driver = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    rating: 4.8,
  },
  route = {
    origin: "Downtown",
    destination: "Airport",
  },
  departureTime = "10:30 AM",
  availableSeats = 3,
  price = 15.5,
  onRequestRide = () => console.log("Ride requested"),
}: CarpoolCardProps) => {
  return (
    <Card className="w-full max-w-sm bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar>
            <AvatarImage src={driver.avatar} alt={driver.name} />
            <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{driver.name}</h3>
            <div className="flex items-center text-sm text-yellow-500">
              <Star className="h-4 w-4 fill-yellow-500 mr-1" />
              <span>{driver.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">
                From: <span className="font-normal">{route.origin}</span>
              </p>
              <p className="text-sm font-medium">
                To: <span className="font-normal">{route.destination}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-600 shrink-0" />
            <p className="text-sm">{departureTime}</p>
          </div>

          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-600 shrink-0" />
            <p className="text-sm">
              {availableSeats} {availableSeats === 1 ? "seat" : "seats"}{" "}
              available
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              ${price.toFixed(2)}
            </Badge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={onRequestRide}
        >
          Request Ride
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarpoolCard;
