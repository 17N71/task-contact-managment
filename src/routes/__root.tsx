import { Fragment } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Dialog } from "~/shared/ui/dialog/ui";

const isDevelopment = import.meta.env.MODE === "development";

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <Outlet />
      <Dialog />
      {isDevelopment && <TanStackRouterDevtools />}
    </Fragment>
  ),
});
