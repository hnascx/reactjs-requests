import React from "react";
import { fetcher } from "../helpers/api";
import type { User } from "../models/user";

export function useUser() {
  const [user, setUser] = React.useState<User | null>(null);
  const [requestStatus, setRequestStatus] = React.useState<
    "idle" | "loading" | "saving"
  >("idle");

  const getUser = React.useCallback(async (id: string) => {
    try {
      setRequestStatus("loading");

      const data = await fetcher(`/users/${id}`);

      setUser(data);
    } catch (e) {
      console.error(e);
      alert("Erro ao buscar usuário");
    } finally {
      setRequestStatus("idle");
    }
  }, []);

  return {
    user,
    userRequestStatus: requestStatus,
    getUser,
  };
}
