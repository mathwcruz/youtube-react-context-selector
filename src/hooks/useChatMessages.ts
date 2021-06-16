import { useContextSelector } from "use-context-selector";
import { ChatContext } from "../context/ChatContext";

export function useChatMessages() {
  const messages = useContextSelector(ChatContext, (chat) => chat.messages); // puxando apenas os dados das mensagens, do context
  const onNewMessage = useContextSelector(
    ChatContext,
    (chat) => chat.onNewMessage
  ); // puxando apenas a função q gera uma nova mensagem

  return {
    messages,
    onNewMessage,
  };
}
