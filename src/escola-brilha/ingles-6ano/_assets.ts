// Assets reusados dos packs anteriores para o 6º Ano — "English Academy".
// Elenco narrativo novo (Ms. Anna, Kenji, Maya, Lucas, Sophie) usando o
// pool de imagens já existente pra evitar geração extra.
import lilyImg from "@/assets/ingles-1ano/u1-a01/lily.png";
import teacherImg from "@/assets/ingles-1ano/u1-a01/teacher.png";
import schoolImg from "@/assets/ingles-1ano/u1-a01/school.png";
import friendsImg from "@/assets/ingles-1ano/u1-a01/friends.png";
import classroomImg from "@/assets/ingles-1ano/u1-a05/classroom.png";
import backpackImg from "@/assets/ingles-1ano/u1-a05/backpack-open.png";
import teacherEmilyImg from "@/assets/ingles-1ano/u1-a05/teacher-emily.png";
import buddyImg from "@/assets/ingles-1ano/u1-a06/buddy.png";
import benAsset from "@/assets/ingles-1ano/u1-a02/ben.png.asset.json";
import airportAsset from "@/assets/ingles-1ano/u1-a02/airport.png.asset.json";
import passportAsset from "@/assets/ingles-1ano/u1-a02/passport.png.asset.json";
import roomAsset from "@/assets/ingles-1ano/u1-a03/room-colors.png.asset.json";

// City places (reuso do 4º Ano)
import hospitalAsset from "@/assets/ingles-4ano/u4-a05/hospital.png.asset.json";
import busStationAsset from "@/assets/ingles-4ano/u4-a05/bus-station.png.asset.json";
import shoppingMallAsset from "@/assets/ingles-4ano/u4-a05/shopping-mall.png.asset.json";
import bakeryAsset from "@/assets/ingles-4ano/u4-a05/bakery.png.asset.json";
import cinemaAsset from "@/assets/ingles-4ano/u4-a05/cinema.png.asset.json";
import restaurantAsset from "@/assets/ingles-4ano/u4-a05/restaurant.png.asset.json";
import museumAsset from "@/assets/ingles-4ano/u4-a05/museum.png.asset.json";
import libraryAsset from "@/assets/ingles-4ano/u4-a05/library.png.asset.json";
import parkAsset from "@/assets/ingles-4ano/u4-a05/park.png.asset.json";
import cityCoverAsset from "@/assets/ingles-4ano/u4-a05/city-cover.png.asset.json";

export const IMG = {
  // Elenco Academy (imagens reusadas com papéis novos)
  ANNA: teacherEmilyImg,   // Ms. Anna — teacher
  KENJI: benAsset.url,     // Kenji — Japan
  MAYA: lilyImg,           // Maya — India
  LUCAS: teacherImg,       // Lucas — Brazil (usa imagem do teacher genérico)
  SOPHIE: buddyImg,        // Sophie — France
  CLASS: classroomImg,
  SCHOOL: schoolImg,
  FRIENDS: friendsImg,
  BACKPACK: backpackImg,
  AIRPORT: airportAsset.url,
  PASSPORT: passportAsset.url,
  ROOM: roomAsset.url,
  // City reuse
  HOSPITAL: hospitalAsset.url,
  BUS_STATION: busStationAsset.url,
  SHOPPING_MALL: shoppingMallAsset.url,
  BAKERY: bakeryAsset.url,
  CINEMA: cinemaAsset.url,
  RESTAURANT: restaurantAsset.url,
  MUSEUM: museumAsset.url,
  LIBRARY: libraryAsset.url,
  PARK: parkAsset.url,
  CITY_COVER: cityCoverAsset.url,
};
