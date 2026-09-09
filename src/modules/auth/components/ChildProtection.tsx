import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";

interface ChildProtectionProps {
  onSuccess: () => void;
  onCancel: () => void;
  title?: string;
  description?: string;
}

export const ChildProtection: React.FC<ChildProtectionProps> = ({
  onSuccess,
  onCancel,
  title = "Área Restrita aos Pais",
  description = "Para sua segurança, resolva esta conta matemática simples para provar que você é um adulto.",
}) => {
  const [num1] = useState(Math.floor(Math.random() * 10) + 5);
  const [num2] = useState(Math.floor(Math.random() * 10) + 5);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(answer) === num1 + num2) {
      onSuccess();
    } else {
      setError(true);
      setAnswer("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[110] flex items-center justify-center p-4 backdrop-blur-md">
      <Card className="max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <Lock className="text-primary h-6 w-6" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center text-2xl font-bold tracking-widest py-4 bg-muted rounded-xl">
              {num1} + {num2} = ?
            </div>
            <Input
              type="number"
              placeholder="Sua resposta"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={`text-center text-xl h-12 ${error ? "border-destructive shake" : ""}`}
              autoFocus
            />
            {error && (
              <p className="text-xs text-destructive text-center">
                Resposta incorreta. Tente novamente.
              </p>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="ghost" className="flex-1" onClick={onCancel}>
            Cancelar
          </Button>
          <Button className="flex-1" onClick={handleSubmit}>
            Confirmar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
