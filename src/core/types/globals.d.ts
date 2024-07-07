declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

declare module global {
  type Id = string;
  type QueryParams = {
    direction: string;
    sort: string;
    limit: number;
    page?: number;
  };
}
