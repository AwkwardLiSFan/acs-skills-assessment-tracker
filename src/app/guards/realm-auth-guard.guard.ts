import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { DatabaseService } from "../services/database/database.service";

export const realmAuthGuardGuard: CanActivateFn = () => {
  const dbService = inject(DatabaseService);

  return dbService.getValidAccessToken().then((accessToken) => {
    return accessToken ? true : false;
  });
};
