import ac from "../assets/furnitures/air_14038303.png";
import bed from "../assets/furnitures/bed_3837739.png";
import chimney from "../assets/furnitures/chimney_9025194.png";
import curtain from "../assets/furnitures/curtain_11664579.png";
import fan from "../assets/furnitures/fan_3046948.png";
import fridge from "../assets/furnitures/fridge_11342172.png";
import table from "../assets/furnitures/round-table_6404680.png";
import chair from "../assets/furnitures/sitting-chair_13721629.png";
import sofa from "../assets/furnitures/sofa_7485520.png";
import tv from "../assets/furnitures/television_6163242.png";
import light from "../assets/furnitures/tungsten_1420572.png";
import wardrobe from "../assets/furnitures/wardrobe_574856.png";
import laundry from "../assets/furnitures/washing-machine_11893473.png";

export const otherAmenities: string[] = [
  "Gym",
  "Lift",
  "Parking",
  "Power Backup",
  "Swimming Pool",
  "Laundry Facilities",
  "Security Surveillance",
];

export const furnishedAmmenties: string[] = [
  "Refrigerator",
  "Air conditioning",
  "Washing Machine",
  "Bed",
  "Wardrobe",
  "Modular Kitchen",
  "Sofa",
  "Curtain",
  "Table",
  "Chair",
  "Light",
  "Fan",
  "Chimney",
  "Television",
];

export const amenitiesIcon: Record<string, string> = {
  "Air conditioning": ac,
  Bed: bed,
  Chimney: chimney,
  Curtain: curtain,
  Fan: fan,
  Refrigerator: fridge,
  Table: table,
  Chair: chair,
  Sofa: sofa,
  Television: tv,
  Light: light,
  Wardrobe: wardrobe,
  "Washing Machine": laundry,
};
