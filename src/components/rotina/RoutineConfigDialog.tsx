import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { routineItemSchema, RoutineItem, saveRoutineItemWithNotifications } from "@/lib/routine.functions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { GraduationCap, ToyBrick, MessageSquare, Apple, Bath, Sun, Flower, Calendar } from "lucide-react";

interface RoutineConfigDialogProps {
  isOpen: boolean;
  onClose: () => void;
  childId: string;
  item?: RoutineItem | null;
  selectedDate?: string;
}

const typeOptions = [
  { value: 'estudo', label: 'Estudo', icon: GraduationCap },
  { value: 'atividade_neurobrilha', label: 'Neuro-Treino', icon: ToyBrick },
  { value: 'terapia', label: 'Terapia', icon: MessageSquare },
  { value: 'escola', label: 'Escola', icon: GraduationCap },
  { value: 'alimentacao', label: 'Alimentação', icon: Apple },
  { value: 'higiene', label: 'Higiene', icon: Bath },
  { value: 'sono', label: 'Sono', icon: Sun },
  { value: 'lazer', label: 'Lazer', icon: ToyBrick },
  { value: 'compromisso', label: 'Compromisso', icon: Calendar },
  { value: 'outro', label: 'Outro', icon: Flower },
];

export function RoutineConfigDialog({ isOpen, onClose, childId, item, selectedDate }: RoutineConfigDialogProps) {
  const queryClient = useQueryClient();
  const { request: requestPush, permission } = usePushNotifications(childId);

  const form = useForm<RoutineItem>({
    resolver: zodResolver(routineItemSchema) as any,
    defaultValues: item ? {
      ...item,
      durationMinutes: item.durationMinutes || 30,
    } : {
      childId,
      title: "",
      type: "estudo",
      startTime: "08:00",
      durationMinutes: 30,
      reminderEnabled: true,
      reminderMinutesBefore: 0,
      status: "pendente" as const,
      source: "manual",
      date: selectedDate || new Date().toISOString().split('T')[0],
    },
  });

  // Sincronizar data se mudar fora (calendário)
  React.useEffect(() => {
    if (!item && selectedDate) {
      form.setValue("date", selectedDate);
    }
  }, [selectedDate, item, form]);

  const saveMutation = useMutation({
    mutationFn: (data: RoutineItem) => saveRoutineItemWithNotifications({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["routine"] });
      toast.success(item ? "Atividade atualizada!" : "Atividade criada!");
      onClose();
    },
    onError: (err: any) => {
      toast.error("Erro ao salvar: " + err.message);
    }
  });

  const onSubmit: SubmitHandler<RoutineItem> = async (data) => {
    if (data.reminderEnabled && permission !== "granted") {
      const granted = await requestPush();
      if (!granted) {
        toast.warning("Lembretes ativados, mas permissão de notificação negada.");
      }
    }
    saveMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-primary">
            {item ? "⚙️ Editar Atividade" : "✨ Nova Atividade"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="font-bold">Título da Atividade</Label>
            <Input
              id="title"
              {...form.register("title")}
              placeholder="Ex: Matemática, Escovação..."
              className="rounded-xl border-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type" className="font-bold">Tipo</Label>
              <Select
                onValueChange={(v) => form.setValue("type", v as any)}
                defaultValue={form.getValues("type")}
              >
                <SelectTrigger className="rounded-xl border-2">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {typeOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      <div className="flex items-center gap-2">
                        <opt.icon className="h-4 w-4" />
                        <span>{opt.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="startTime" className="font-bold">Início</Label>
              <Input
                id="startTime"
                type="time"
                {...form.register("startTime")}
                className="rounded-xl border-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="font-bold">Duração (min)</Label>
              <Input
                id="duration"
                type="number"
                {...form.register("durationMinutes", { valueAsNumber: true })}
                className="rounded-xl border-2"
              />
            </div>

            <div className="flex items-center justify-between pt-8">
              <Label htmlFor="reminder" className="font-bold cursor-pointer">Lembrete</Label>
              <Switch
                id="reminder"
                checked={form.watch("reminderEnabled")}
                onCheckedChange={(v) => form.setValue("reminderEnabled", v)}
              />
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button
              type="submit"
              disabled={saveMutation.isPending}
              className="w-full btn-tap bg-primary text-primary-foreground font-black text-lg py-6 rounded-2xl shadow-lg"
            >
              {saveMutation.isPending ? "Salvando..." : "SALVAR NA ROTINA"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
