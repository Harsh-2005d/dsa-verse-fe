export async function Signup(
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  Confirm: string
) {
  console.log("Signing up with data:", import.meta.env.VITE_API_URL);
  const response = await fetch("http://localhost:3000/auth/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      Confirm: Confirm,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to sign up");
  }

  return response.json();
}
export async function Login(email: string, password: string) {
  console.log("Logging in with data:", { email, password });
  console.log("API URL:", import.meta.env.VITE_API_URL);

  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  // Read and store response body only once
  console.log("Response status:", response.status);
  const result = await response.json();
  console.log("Login response:", result);

  if (!response.ok) {
    console.error("Login failed with error:", result);
    throw new Error(result?.error || "Failed to log in");
  }

  return result;
}
