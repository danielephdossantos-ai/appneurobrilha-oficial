import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell, PageHeader, Card } from "@/components/Layout";
import { useAppState } from "@/core/store";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRoutineItems, toggleRoutineItemStatus, RoutineItem } from "@/lib/routine.functions";
import { format, addDays, subDays, isToday, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Sun,
  GraduationCap,
  Apple,
  Flower,
  Calculator,
  Utensils,
  MessageSquare,
  ToyBrick,
  Bath,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  Clock,
  AlertCircle,
  Play,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/rotina")({
  component: Rotina,
});

const iconMap: Record<string, any> = {
  estudo: GraduationCap,
  atividade_neurobrilha: ToyBrick,
  terapia: MessageSquare,
  escola: GraduationCap,
  alimentacao: Apple,
  higiene: Bath,
  sono: Sun,
  lazer: ToyBrick,
  compromisso: Calendar,
  outro: Flower,
};

const categoryCores: Record<string, string> = {
  estudo: "bg-primary/10 border-primary/20",
  atividade_neurobrilha: "bg-sun/20 border-sun/30",
  terapia: "bg-petal/20 border-petal/30",
  escola: "bg-primary/10 border-primary/20",
  alimentacao: "bg-coral/20 border-coral/30",
  higiene: "bg-petal/10 border-petal/20",
  sono: "bg-sun/10 border-sun/20",
  lazer: "bg-sun/20 border-sun/30",
  compromisso: "bg-primary/5 border-primary/10",
  outro: "bg-muted border-muted-foreground/10",
};

function Rotina() {
  const { activeChild } = useAppState();
  const queryClient = useQueryClient();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateStr = format(selectedDate, "yyyy-MM-dd");

  const { data: routine = [], isLoading } = useQuery({
    onSuccess: async () => {
      if (activeChild?.id && dateStr && routine.length === 0) {
        const { syncPlansToRoutine } = await import("@/modules/neuro-plano/sync.functions");
        await syncPlansToRoutine({ data: { childId: activeChild.id, date: dateStr } });
        queryClient.invalidateQueries({ queryKey: ["routine"] });
      }
    },
    queryKey: ["routine", activeChild?.id, dateStr],
    queryFn: () => getRoutineItems({ data: { childId: activeChild!.id, date: dateStr } }),
    enabled: !!activeChild?.id,
  });

  const toggleStatus = useMutation({
    mutationFn: (vars: { id: string; status: RoutineItem["status"] }) =>
      toggleRoutineItemStatus({ data: vars }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["routine"] });
      toast.success("Status atualizado!");
    },
  });

  if (!activeChild) {
    return (
      <Shell>
        <PageHeader icon={Calendar} title="Rotina de Hoje" subtitle="Escolha uma criança primeiro" />
        <div className="text-center p-8">
          <Link to="/" className="btn-tap bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold">
            Voltar para o Início
          </Link>
        </div>
      </Shell>
    );
  }

  const handlePrevDay = () => setSelectedDate(subDays(selectedDate, 1));
  const handleNextDay = () => setSelectedDate(addDays(selectedDate, 1));
  const handleToday = () => setSelectedDate(new Date());

  const getStatusIcon = (item: any) => {
    if (item.status === "concluido") return <CheckCircle2 className="h-6 w-6 text-green-500" />;
    if (item.status === "atrasado") return <AlertCircle className="h-6 w-6 text-red-500" />;
    
    const now = new Date();
    const [h, m] = item.startTime.split(":").map(Number);
    const itemTime = new Date(selectedDate);
    itemTime.setHours(h, m, 0, 0);

    if (isToday(selectedDate) && item.status === "pendente") {
      const isPastItem = itemTime < now;
      if (isPastItem) return <Clock className="h-6 w-6 text-warning" />;
      return <Circle className="h-6 w-6 text-muted-foreground" />;
    }
    
    return <Circle className="h-6 w-6 text-muted-foreground" />;
  };

  return (
    <Shell>
      <div className="flex items-center justify-between mb-2">
        <PageHeader 
          icon={Calendar} 
          title="Minha Rotina" 
          subtitle={isToday(selectedDate) ? "O que temos para hoje?" : format(selectedDate, "EEEE, d 'de' MMMM", { locale: ptBR })} 
        />
        <Link to="/painel-pais" className="p-2 rounded-full hover:bg-muted transition-colors">
          <Settings className="h-6 w-6 text-muted-foreground" />
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <button onClick={handlePrevDay} className="p-2 rounded-xl bg-muted"><ChevronLeft className="h-5 w-5"/></button>
        <button 
          onClick={handleToday}
          className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap ${isToday(selectedDate) ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
        >
          Hoje
        </button>
        <div className="flex-1 text-center font-bold min-w-[120px]">
          {format(selectedDate, "dd/MM/yyyy")}
        </div>
        <button onClick={handleNextDay} className="p-2 rounded-xl bg-muted"><ChevronRight className="h-5 w-5"/></button>
      </div>

      {isLoading ? (
        <div className="space-y-4 animate-pulse">
          {[1, 2, 3].map(i => <div key={i} className="h-24 bg-muted rounded-3xl" />)}
        </div>
      ) : routine.length === 0 ? (
        <Card className="text-center p-12 bg-muted/50 border-dashed border-2">
          <div className="text-4xl mb-4">🌈</div>
          <h3 className="font-bold text-lg mb-2">Nenhuma atividade planejada</h3>
          <p className="text-muted-foreground mb-6">Que tal adicionar algo especial à rotina?</p>
          <Link to="/painel-pais" className="btn-tap bg-primary text-primary-foreground px-6 py-2 rounded-xl font-bold inline-flex items-center gap-2">
             Configurar Rotina
          </Link>
        </Card>
      ) : (
        <div className="space-y-3">
          {routine.map((item: any) => {
            const Icon = iconMap[item.type] || Flower;
            
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl border-2 p-4 flex items-center gap-4 transition-all active:scale-[0.98] ${categoryCores[item.type]} ${item.status === 'concluido' ? 'opacity-60 grayscale-[0.5]' : ''}`}
              >
                <div className="flex flex-col items-center justify-center min-w-[60px]">
                  <span className="font-mono font-black text-lg">{item.startTime}</span>
                  <span className="text-[10px] font-bold opacity-60 uppercase">{item.durationMinutes} min</span>
                </div>

                <div className={`p-3 rounded-2xl bg-white shadow-sm text-primary`}>
                  <Icon className="h-7 w-7" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-black text-lg truncate leading-tight">{item.title}</h4>
                  {item.description && <p className="text-xs opacity-70 truncate">{item.description}</p>}
                  {item.source !== 'manual' && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-black/5 rounded text-[9px] font-black uppercase tracking-wider">
                      {item.source.replace('_', ' ')}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {item.source !== 'manual' && item.status !== 'concluido' && (
                    <button 
                      onClick={() => {
                        toast.info(`Iniciando ${item.title}...`);
                      }}
                      className="p-2 rounded-full bg-primary text-primary-foreground shadow-lg active:scale-90"
                    >
                      <Play className="h-5 w-5 fill-current" />
                    </button>
                  )}
                  <button 
                    onClick={() => toggleStatus.mutate({ 
                      id: item.id!, 
                      status: item.status === 'concluido' ? 'pendente' : 'concluido' 
                    })}
                    className="p-1 group-hover:scale-110 transition-transform"
                  >
                    {getStatusIcon(item)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Card className="mt-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-sun/5">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-primary/20 p-2 rounded-xl">
             <Calculator className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-black">Sugestão do Pip</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Identificamos um intervalo livre às 15:30. A <b>Minha Jornada</b> recomenda 5 minutos de leitura ativa, alinhado ao seu interesse por <i>animais</i>.
        </p>
        <button className="mt-4 w-full py-2 bg-white border-2 border-primary/20 rounded-xl text-xs font-black hover:bg-primary hover:text-white transition-colors">
           ADICIONAR À ROTINA
        </button>
      </Card>
    </Shell>
  );
}
