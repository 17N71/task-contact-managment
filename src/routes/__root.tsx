import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const isDevelopment = import.meta.env.MODE === "development";
export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {isDevelopment && <TanStackRouterDevtools />}
    </>
  ),
});
