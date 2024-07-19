'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; 
import { Spinner } from "@/components/ui/spinner"


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Inicia la carga

    try {
      const response = await fetch(`https://m.ejes.com/api/get_user/?usr=${username}&pwd=${password}`, {
        method: "POST",
        headers: {
          "Authorization": "Token 7970a8ab107238782e684c26ccf25c406a87566e"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result.user_id) {
        const userData = {
          user_id: result.user_id,
          username,
          metricas: result.metricas 
        };
        sessionStorage.setItem('user', JSON.stringify(userData));



        router.push('/'); // Redirigir al Home
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false); // Finaliza la carga
    }
  };

  return (
    <div className="grid justify-center h-full w-full md:w-1/2 gap-6 p-4 m-1 rounded-2xl bg-[#DBDBDB]">
      <div className="grid gap-4 bg-[#DBDBDB] justify-items-start">
        <h1 className="text-xl font-bold indent-4">Ingreso a Ejes Redes</h1>
        <h2>Ingrese mail o usuario y contraseña</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <p>Su email o usuario</p>
            <Label className="sr-only" htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <div className="grid gap-1">
            <p>Contraseña</p>
            <Label className="sr-only" htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading} className="bg-[#F47E36]">
            {isLoading && <Spinner />}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}