import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";

import {
  ArrowNarrowLeftIcon,
  HomeIcon,
  SearchIcon,
} from "@heroicons/react/solid";

import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const user = {
  name: "Whitney Francis",
  email: "whitney@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Applicants", href: "#" },
  { name: "Company", href: "#" },
];

const breadcrumbs = [
  { name: "Jobs", href: "#", current: false },
  { name: "Front End Developer", href: "#", current: false },
  { name: "Applicants", href: "#", current: true },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex items-center flex-shrink-0">
              <a href="#">
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                  alt="Workflow"
                />
              </a>
            </div>
            <nav
              aria-label="Global"
              className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            <button
              type="button"
              className="flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="w-6 h-6" aria-hidden="true" />
            </button>

            <div className="flex ml-4 text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
