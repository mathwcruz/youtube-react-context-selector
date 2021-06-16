import faker from "faker";
import { FormEvent } from "react";
import { useChatMessages } from "../hooks/useChatMessages";

export function Chat() {
  const { messages, onNewMessage } = useChatMessages();

  function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    onNewMessage({
      author: "Diego Fernandes",
      text: faker.lorem.paragraph(),
    });
  }

  return (
    <section aria-labelledby="chat-title">
      <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="chat-title" className="text-lg font-medium text-gray-900">
              Chat messages
            </h2>
          </div>
          <div className="px-4 py-6 sm:px-6">
            <ul className="space-y-8">
              {messages.map((message) => (
                <li key={message.id}>
                  <div className="flex space-x-3">
                    <div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-gray-900">
                          {message.author}
                        </a>
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        <p>{message.text}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-50 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-1 min-w-0">
              <form action="#" onSubmit={handleSendMessage}>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  className="block w-full p-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Leave a message"
                  defaultValue={""}
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
