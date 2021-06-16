import { PlusIcon } from "@heroicons/react/solid";
import faker from "faker";
import { useUserList } from "../hooks/useUserList";

export function UserList() {
  const { connected, onUserConnected } = useUserList();

  return (
    <section
      aria-labelledby="timeline-title"
      className="lg:col-start-3 lg:col-span-1"
    >
      <div className="px-4 py-5 bg-white shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
          User list
        </h2>

        {/* Activity Feed */}
        <div className="flow-root mt-6">
          <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            {connected.map((user) => {
              return (
                <li
                  key={user.id}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURI(
                        user.name
                      )}`}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-900">
                      {user.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Remove<span className="sr-only"> {user.name}</span>
                  </button>
                </li>
              );
            })}
            <li className="flex items-center justify-between py-2">
              <button
                type="button"
                onClick={() => onUserConnected(faker.name.findName())}
                className="flex items-center p-1 -ml-1 bg-white rounded-md group focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="flex items-center justify-center w-8 h-8 text-gray-400 border-2 border-gray-300 border-dashed rounded-full">
                  <PlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                  Add new user
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
