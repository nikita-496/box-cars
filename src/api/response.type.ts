type Make = { id: global.Id; name: string };

type MakeModel = {
  id: global.Id;
  make_id: global.Id;
  make: Make;
};

type MakeModelTrim = {
  id: global.Id;
  make_model_id: global.Id;
  year: number;
  name: string;
  description: string;
  msrp: number;
  invoice: number;
  created: string;
  modified: string;
  make_model: MakeModel;
  __message: string;
};

type Body = {
  id: global.Id;
  make_model_trim_id: global.Id;
  type: string;
  doors: number;
  length: string;
  width: string;
  seats: number;
  height: string;
  wheel_base: string;
  front_track: null;
  rear_track: null;
  ground_clearance: string;
  cargo_capacity: string;
  max_cargo_capacity: string;
  curb_weight: number;
  gross_weight: null;
  max_payload: null;
  max_towing_capacity: number;
  make_model_trim: MakeModelTrim;
  __message: string;
};

export type MakesResponse = Array<Make>;
export type BodiesResponse = Array<Body>;
