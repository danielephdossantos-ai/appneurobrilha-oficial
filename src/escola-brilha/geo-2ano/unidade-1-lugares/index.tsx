import { useState } from "react";
import { BarraXP } from "./components/BarraXP";
import { GaleriaMoradias } from "./components/GaleriaMoradias";
import type { MoradiaId } from "./dados";

/**
 * Orquestrador da Unidade 1 · Geografia 2º Ano.
 * Cena 1 (Galeria) implementada.
 * Cenas 2-6 (GeoScanner, Painel Trunfo, Laboratório, Arquiteto, Vitória) — próximo passo.
 */
export function UnidadeLugares() {
  const [xp, setXp] = useState(0);
  const [moedas, setMoedas] = useState(0);
  const [concluidas, setConcluidas] = useState<Set<MoradiaId>>(new Set());
  const [ativa, setAtiva] = useState<MoradiaId | null>(null);

  const concluirMoradia = (id: MoradiaId) => {
    setConcluidas((s) => {
      if (s.has(id)) return s;
      const next = new Set(s);
      next.add(id);
      return next;
    });
    setXp((x) => x + 40);
    setMoedas((m) => m + 24);
    setAtiva(null);
  };

  return (
    <div className="relative">
      <BarraXP xp={xp} moedas={moedas} />

      <GaleriaMoradias
        concluidas={concluidas}
        onSelecionar={(id) => {
          setAtiva(id);
          // TEMPORÁRIO — cena 2 (GeoScanner) ainda não implementada.
          // Simula conclusão pra fluxo de teste da cena 1.
          concluirMoradia(id);
        }}
      />

      {/* Placeholder pra próximas cenas */}
      {ativa && null}
    </div>
  );
}

export default UnidadeLugares;
