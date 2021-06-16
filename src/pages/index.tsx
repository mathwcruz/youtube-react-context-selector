import { Header } from "../components/Header";
import { Chat } from "../components/Chat";
import { UserList } from "../components/UserList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="grid max-w-3xl grid-cols-1 gap-6 pb-8 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
          <Chat />
        </div>

        <UserList />
      </div>
    </div>
  );
}
