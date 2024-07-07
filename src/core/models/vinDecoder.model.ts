import { MakeM } from "@/core/models/make.model";
import { TrimM } from "@/core/models/trim.model";

type MakeModel = {
  make_model: {
    id: global.Id;
    make_id: global.Id;
    name: string;
    make: MakeM;
  };
};

type Trim = TrimM & MakeModel;

export type VinDecoderM = {
  year: number;
  make: string;
  model: string;
  trim: string;
  specs: object;
  trims: Trim[];
};
