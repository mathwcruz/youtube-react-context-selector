import { useContextSelector } from "use-context-selector";
import { ChatContext } from "../context/ChatContext";

export function useUserList() {
  const connected = useContextSelector(ChatContext, (chat) => chat.connected); // primeiro parâmetro recebe qual o Context e o segundo é uma função que recebe todos os dados q o context provê, mas retorna apenas os dados q eu quero daquele contexto, para retornar do hook. Nesse caso, pegando apenas os dados de pessoas conectadas
  const onUserConnected = useContextSelector(
    ChatContext,
    (chat) => chat.onUserConnected
  ); // pegando a função que conecta um novo usuário no app

  // cada variável recebe apenas um dado que é retornado de dentro do context, se quiser puxar 4 dados do contexto, terá q criar 4 variáveis diferentes para armazenar esses dados

  return {
    connected,
    onUserConnected,
  };
}
