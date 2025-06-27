import { useUsers } from "../hooks/useUsers";

export function UsersList() {
  const { users, isLoadingUsers } = useUsers()

  if (isLoadingUsers) {
    return <div>Carregando usuários...</div>
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>ID: {user.id} - Nome: {user.name}</li>
      ))}
    </ul>
  );
}