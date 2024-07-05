interface IClientStorage {
  baseApiUrl: string;
  cardApi2PUrl: string;
}

const BASE_API_URL = `${import.meta.env["VITE_BASE_API_URL"]}`;
const CAR_API2_P_URL = `${import.meta.env["VITE_CAR_API2_P_URL"]}/api`;

export class ClientStorage implements IClientStorage {
  readonly baseApiUrl = BASE_API_URL;
  readonly cardApi2PUrl = CAR_API2_P_URL;
}
