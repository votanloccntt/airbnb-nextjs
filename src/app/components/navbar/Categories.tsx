"use client";

import { IoDiamond } from "react-icons/io5";
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This proerty is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This proerty has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This proerty is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This proerty is countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This proerty has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This proerty is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This proerty is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This proerty has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This proerty is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This proerty has camping activties!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This proerty has Arctic!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This proerty is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This proerty is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This proerty is in the barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This proerty is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
