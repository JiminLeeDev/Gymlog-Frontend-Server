import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    localStorage.clear();

    window.location.href = "#/login";
    window.location.reload();
  }, []);

  return <></>;
}
