import "angular-server-side-configuration/process";

export const environment = {
  GQL_ENDPOINT: process.env["GQL_ENDPOINT"] || "ws://localhost:8080/graphql",
};
