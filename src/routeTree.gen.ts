/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as ContactsLayoutImport } from "./routes/_contacts-layout";
import { Route as ContactsLayoutFallbackLayoutImport } from "./routes/_contacts-layout/_fallback-layout";
import { Route as ContactsLayoutNewContactIndexImport } from "./routes/_contacts-layout/new-contact/index";
import { Route as ContactsLayoutFallbackLayoutContactsImport } from "./routes/_contacts-layout/_fallback-layout/contacts";

// Create Virtual Routes

const ContactsLayoutFallbackLayoutContactIdLazyImport = createFileRoute(
  "/_contacts-layout/_fallback-layout/$contactId"
)();

// Create/Update Routes

const ContactsLayoutRoute = ContactsLayoutImport.update({
  id: "/_contacts-layout",
  getParentRoute: () => rootRoute,
} as any);

const ContactsLayoutFallbackLayoutRoute =
  ContactsLayoutFallbackLayoutImport.update({
    id: "/_fallback-layout",
    getParentRoute: () => ContactsLayoutRoute,
  } as any);

const ContactsLayoutNewContactIndexRoute =
  ContactsLayoutNewContactIndexImport.update({
    id: "/new-contact/",
    path: "/new-contact/",
    getParentRoute: () => ContactsLayoutRoute,
  } as any);

const ContactsLayoutFallbackLayoutContactIdLazyRoute =
  ContactsLayoutFallbackLayoutContactIdLazyImport.update({
    id: "/$contactId",
    path: "/$contactId",
    getParentRoute: () => ContactsLayoutFallbackLayoutRoute,
  } as any).lazy(() =>
    import("./routes/_contacts-layout/_fallback-layout/$contactId.lazy").then(
      (d) => d.Route
    )
  );

const ContactsLayoutFallbackLayoutContactsRoute =
  ContactsLayoutFallbackLayoutContactsImport.update({
    id: "/contacts",
    path: "/contacts",
    getParentRoute: () => ContactsLayoutFallbackLayoutRoute,
  } as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_contacts-layout": {
      id: "/_contacts-layout";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof ContactsLayoutImport;
      parentRoute: typeof rootRoute;
    };
    "/_contacts-layout/_fallback-layout": {
      id: "/_contacts-layout/_fallback-layout";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof ContactsLayoutFallbackLayoutImport;
      parentRoute: typeof ContactsLayoutImport;
    };
    "/_contacts-layout/_fallback-layout/contacts": {
      id: "/_contacts-layout/_fallback-layout/contacts";
      path: "/contacts";
      fullPath: "/contacts";
      preLoaderRoute: typeof ContactsLayoutFallbackLayoutContactsImport;
      parentRoute: typeof ContactsLayoutFallbackLayoutImport;
    };
    "/_contacts-layout/_fallback-layout/$contactId": {
      id: "/_contacts-layout/_fallback-layout/$contactId";
      path: "/$contactId";
      fullPath: "/$contactId";
      preLoaderRoute: typeof ContactsLayoutFallbackLayoutContactIdLazyImport;
      parentRoute: typeof ContactsLayoutFallbackLayoutImport;
    };
    "/_contacts-layout/new-contact/": {
      id: "/_contacts-layout/new-contact/";
      path: "/new-contact";
      fullPath: "/new-contact";
      preLoaderRoute: typeof ContactsLayoutNewContactIndexImport;
      parentRoute: typeof ContactsLayoutImport;
    };
  }
}

// Create and export the route tree

interface ContactsLayoutFallbackLayoutRouteChildren {
  ContactsLayoutFallbackLayoutContactsRoute: typeof ContactsLayoutFallbackLayoutContactsRoute;
  ContactsLayoutFallbackLayoutContactIdLazyRoute: typeof ContactsLayoutFallbackLayoutContactIdLazyRoute;
}

const ContactsLayoutFallbackLayoutRouteChildren: ContactsLayoutFallbackLayoutRouteChildren =
  {
    ContactsLayoutFallbackLayoutContactsRoute:
      ContactsLayoutFallbackLayoutContactsRoute,
    ContactsLayoutFallbackLayoutContactIdLazyRoute:
      ContactsLayoutFallbackLayoutContactIdLazyRoute,
  };

const ContactsLayoutFallbackLayoutRouteWithChildren =
  ContactsLayoutFallbackLayoutRoute._addFileChildren(
    ContactsLayoutFallbackLayoutRouteChildren
  );

interface ContactsLayoutRouteChildren {
  ContactsLayoutFallbackLayoutRoute: typeof ContactsLayoutFallbackLayoutRouteWithChildren;
  ContactsLayoutNewContactIndexRoute: typeof ContactsLayoutNewContactIndexRoute;
}

const ContactsLayoutRouteChildren: ContactsLayoutRouteChildren = {
  ContactsLayoutFallbackLayoutRoute:
    ContactsLayoutFallbackLayoutRouteWithChildren,
  ContactsLayoutNewContactIndexRoute: ContactsLayoutNewContactIndexRoute,
};

const ContactsLayoutRouteWithChildren = ContactsLayoutRoute._addFileChildren(
  ContactsLayoutRouteChildren
);

export interface FileRoutesByFullPath {
  "": typeof ContactsLayoutFallbackLayoutRouteWithChildren;
  "/contacts": typeof ContactsLayoutFallbackLayoutContactsRoute;
  "/$contactId": typeof ContactsLayoutFallbackLayoutContactIdLazyRoute;
  "/new-contact": typeof ContactsLayoutNewContactIndexRoute;
}

export interface FileRoutesByTo {
  "": typeof ContactsLayoutFallbackLayoutRouteWithChildren;
  "/contacts": typeof ContactsLayoutFallbackLayoutContactsRoute;
  "/$contactId": typeof ContactsLayoutFallbackLayoutContactIdLazyRoute;
  "/new-contact": typeof ContactsLayoutNewContactIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_contacts-layout": typeof ContactsLayoutRouteWithChildren;
  "/_contacts-layout/_fallback-layout": typeof ContactsLayoutFallbackLayoutRouteWithChildren;
  "/_contacts-layout/_fallback-layout/contacts": typeof ContactsLayoutFallbackLayoutContactsRoute;
  "/_contacts-layout/_fallback-layout/$contactId": typeof ContactsLayoutFallbackLayoutContactIdLazyRoute;
  "/_contacts-layout/new-contact/": typeof ContactsLayoutNewContactIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "" | "/contacts" | "/$contactId" | "/new-contact";
  fileRoutesByTo: FileRoutesByTo;
  to: "" | "/contacts" | "/$contactId" | "/new-contact";
  id:
    | "__root__"
    | "/_contacts-layout"
    | "/_contacts-layout/_fallback-layout"
    | "/_contacts-layout/_fallback-layout/contacts"
    | "/_contacts-layout/_fallback-layout/$contactId"
    | "/_contacts-layout/new-contact/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  ContactsLayoutRoute: typeof ContactsLayoutRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  ContactsLayoutRoute: ContactsLayoutRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_contacts-layout"
      ]
    },
    "/_contacts-layout": {
      "filePath": "_contacts-layout.tsx",
      "children": [
        "/_contacts-layout/_fallback-layout",
        "/_contacts-layout/new-contact/"
      ]
    },
    "/_contacts-layout/_fallback-layout": {
      "filePath": "_contacts-layout/_fallback-layout.tsx",
      "parent": "/_contacts-layout",
      "children": [
        "/_contacts-layout/_fallback-layout/contacts",
        "/_contacts-layout/_fallback-layout/$contactId"
      ]
    },
    "/_contacts-layout/_fallback-layout/contacts": {
      "filePath": "_contacts-layout/_fallback-layout/contacts.tsx",
      "parent": "/_contacts-layout/_fallback-layout"
    },
    "/_contacts-layout/_fallback-layout/$contactId": {
      "filePath": "_contacts-layout/_fallback-layout/$contactId.lazy.tsx",
      "parent": "/_contacts-layout/_fallback-layout"
    },
    "/_contacts-layout/new-contact/": {
      "filePath": "_contacts-layout/new-contact/index.tsx",
      "parent": "/_contacts-layout"
    }
  }
}
ROUTE_MANIFEST_END */
