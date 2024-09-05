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
import washing from "../assets/furnitures/washing-machine_11893473.png";
import alarm from "../assets/features/bell_8967963.png";
import backup from "../assets/features/database_16630997.png";
import lift from "../assets/features/elevator_3073775.png";
import gym from "../assets/features/gym_6040568.png";
import pool from "../assets/features/swimming-pool_6348600.png";
import park from "../assets/features/parking-area_2830310.png";
import cctv from "../assets/features/monitoring_1279570.png";
import staff from "../assets/features/technician_17474326.png";
import waste from "../assets/features/van_963684.png";
import laundry from "../assets/features/washing_3223741.png";

export const otherAmenities: string[] = [
  "Battery Backup",
  "Elevator",
  "Gym",
  "Parking",
  "Power Backup",
  "Swimming Pool",
  "Laundry Facilities",
  "Security Surveillance",
  "Maintenance Staff",
  "Waste Disposal",
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
  "Air Conditioning": ac,
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
  Wardrobes: wardrobe,
  "Washing Machine": washing,
  "Modular Kitchen": chimney,
};

export const featureIcon: Record<string, string> = {
  "Fire Alarm": alarm,
  "Battery Backup": backup,
  "Power Backup": backup,
  Lift: lift,
  Elevator: lift,
  Gym: gym,
  Parking: park,
  "Swimming Pool": pool,
  "Laundry Facilities": laundry,
  "Security Surveillance": cctv,
  "Maintenance Staff": staff,
  "Waste Disposal": waste,
};
