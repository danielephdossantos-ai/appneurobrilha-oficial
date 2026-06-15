import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoutineManagerProps {
  routine: { time: string; activity: string; completed: boolean }[];
}

export const RoutineManager: React.FC<RoutineManagerProps> = ({ routine }) => {
  return (
    <Card className="border-none shadow-sm h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Rotina Diária</CardTitle>
          <CardDescription>Acompanhamento de metas de hoje</CardDescription>
        </div>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-dashed">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {routine.map((item, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-slate-400 mb-1">{item.time}</span>
              <div className="h-full w-px bg-slate-100 flex-1 min-h-[10px]" />
            </div>
            <div
              className={`flex-1 p-3 rounded-xl border transition-all ${item.completed ? "bg-slate-50 border-slate-100 opacity-60" : "bg-white border-slate-200 shadow-sm"}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-semibold ${item.completed ? "text-slate-500 line-through" : "text-slate-800"}`}
                >
                  {item.activity}
                </span>
                {item.completed ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <Clock className="h-4 w-4 text-slate-300" />
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
