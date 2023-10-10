import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { realmAuthGuardGuard } from "./realm-auth-guard.guard";

describe("realmAuthGuardGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      realmAuthGuardGuard(...guardParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
