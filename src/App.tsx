import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserInfo } from "./components/UserInfo";
import { UserNewForm } from "./components/UserNewForm";
import { UsersList } from "./components/UsersList";

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
      <hr />
      <UserNewForm />
      <hr />
      <UsersList />
    </QueryClientProvider>
  )
}