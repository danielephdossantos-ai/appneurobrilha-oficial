
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Lock, Bell, Save } from "lucide-react";
import { toast } from "sonner";

export const ParentalControlSettings = () => {
  const [timeLimit, setTimeLimit] = useState([60]);
  const [breakInterval, setBreakInterval] = useState([20]);
  const [mandatoryBreaks, setMandatoryBreaks] = useState(true);

  const handleSave = () => {
    toast.success("Configurações de controle parental salvas!");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <CardTitle>Limites de Tempo</CardTitle>
          </div>
          <CardDescription>Gerencie quanto tempo seu filho pode passar no aplicativo diariamente.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <Label>Limite Diário (minutos)</Label>
              <span className="font-bold text-primary">{timeLimit} min</span>
            </div>
            <Slider 
              value={timeLimit} 
              onValueChange={setTimeLimit} 
              max={180} 
              step={5} 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Pausas Obrigatórias</Label>
              <p className="text-xs text-muted-foreground">O sistema sugerirá uma pausa após o intervalo definido.</p>
            </div>
            <Switch 
              checked={mandatoryBreaks} 
              onCheckedChange={setMandatoryBreaks} 
            />
          </div>

          {mandatoryBreaks && (
            <div className="space-y-4 pt-4 border-t">
              <div className="flex justify-between">
                <Label>Intervalo entre Pausas (minutos)</Label>
                <span className="font-bold text-primary">{breakInterval} min</span>
              </div>
              <Slider 
                value={breakInterval} 
                onValueChange={setBreakInterval} 
                max={60} 
                step={5} 
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-orange-500" />
            <CardTitle>Restrições de Acesso</CardTitle>
          </div>
          <CardDescription>Defina horários permitidos e bloqueios específicos.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Início das Atividades</Label>
              <input type="time" className="w-full p-2 border rounded-md" defaultValue="08:00" />
            </div>
            <div className="space-y-2">
              <Label>Fim das Atividades</Label>
              <input type="time" className="w-full p-2 border rounded-md" defaultValue="20:00" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="gap-2">
          <Save className="w-4 h-4" /> Salvar Alterações
        </Button>
      </div>
    </div>
  );
};
