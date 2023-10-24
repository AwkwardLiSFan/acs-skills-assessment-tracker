import { environment as environment_prod } from "./environment.prod";

export const environment = {
  ...environment_prod,
  production: false,
};
