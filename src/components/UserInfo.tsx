import React from "react"
import { useUser } from "../hooks/useUser"

export function UserInfo() {
  const { user, userRequestStatus, getUser } = useUser()

  React.useEffect(() => {
    getUser("2")
  }, [getUser])

  if (userRequestStatus === 'loading') {
    return <div>Carregando usuário...</div>
  }

  return (
    <ul>
      <li>ID: {user?.id}</li>
      <li>Nome: {user?.name}</li>
    </ul>
  )
}