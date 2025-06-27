import React from "react";
import { useUser } from "../hooks/useUser";
import type { User } from "../models/user";

export function UserNewForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { createUser, userRequestStatus } = useUser();

  async function handleSubmit(event: React.FormEvent) {
    if (!formRef.current) return;

    event.preventDefault();

    const data = new FormData(formRef.current);

    const payload = {
      id: data.get("id"),
      name: data.get("name"),
    };

    await createUser(payload as User);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <input type="text" name="id" placeholder="ID" required />
      </div>
      <div>
        <input type="text" name="name" placeholder="Nome" required />
      </div>
      <div>
        <button type="submit">
          {userRequestStatus === "saving" ? "Criando..." : "Criar usuário"}
        </button>
      </div>
    </form>
  );
}
