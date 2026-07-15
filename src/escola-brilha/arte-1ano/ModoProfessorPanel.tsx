import { useState } from "react";
import { GraduationCap, Lock, ChevronDown, ChevronUp } from "lucide-react";
import { useParentMode } from "@/contexts/ParentModeContext";
import type { ModoProfessor } from "./types";

const TINTA = "#2A2320";

/**
 * Modo Professor — bloco pedagógico invisível para a criança.
 * Fechado por padrão; só abre depois de PIN adulto (ParentMode).
 */
export function ModoProfessorPanel({ dados }: { dados: ModoProfessor }) {
  const parent = useParentMode();
  const [aberto, setAberto] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [criarPin, setCriarPin] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [pedindoPin, setPedindoPin] = useState(false);

  function abrir() {
    setErro(null);
    if (parent.unlocked) {
      setAberto(true);
      return;
    }
    setPedindoPin(true);
  }

  function confirmarPin() {
    setErro(null);
    if (!parent.hasPin) {
      if (criarPin.length < 4) {
        setErro("Escolha um PIN de pelo menos 4 dígitos.");
        return;
      }
      parent.setPin(criarPin);
      parent.unlock();
      setAberto(true);
      setPedindoPin(false);
      return;
    }
    if (!parent.verifyPin(pinInput)) {
      setErro("PIN incorreto.");
      return;
    }
    parent.unlock();
    setAberto(true);
    setPedindoPin(false);
  }

  return (
    <section
      className="rounded-3xl p-5 md:p-6 mb-10 border-2 border-dashed"
      style={{ borderColor: TINTA + "40", background: "#FFFFFF80" }}
    >
      <button
        onClick={aberto ? () => setAberto(false) : abrir}
        className="w-full flex items-center gap-3 text-left"
      >
        <div className="h-10 w-10 rounded-full grid place-items-center text-white" style={{ background: TINTA }}>
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: TINTA + "80" }}>
            🔒 Apenas para adultos
          </div>
          <div className="font-serif text-lg font-black" style={{ color: TINTA }}>
            Modo Professor & Família
          </div>
        </div>
        {aberto ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>

      {pedindoPin && !aberto && (
        <div className="mt-4 rounded-2xl p-4 bg-white border-2" style={{ borderColor: TINTA }}>
          <div className="flex items-center gap-2 mb-2 font-black" style={{ color: TINTA }}>
            <Lock className="h-4 w-4" /> {parent.hasPin ? "Digite o PIN de adulto" : "Crie um PIN de adulto"}
          </div>
          <input
            type="password"
            inputMode="numeric"
            value={parent.hasPin ? pinInput : criarPin}
            onChange={(e) =>
              parent.hasPin ? setPinInput(e.target.value) : setCriarPin(e.target.value)
            }
            placeholder="••••"
            className="w-full text-2xl font-black text-center tracking-widest rounded-xl border-2 p-3"
            style={{ borderColor: TINTA + "60" }}
          />
          {erro && <div className="text-xs mt-2 text-red-600 font-black">{erro}</div>}
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setPedindoPin(false)}
              className="px-3 py-2 rounded-full text-sm font-black bg-[#F1E7D0]"
              style={{ color: TINTA }}
            >
              Cancelar
            </button>
            <button
              onClick={confirmarPin}
              className="ml-auto px-4 py-2 rounded-full text-sm font-black text-white"
              style={{ background: TINTA }}
            >
              {parent.hasPin ? "Entrar" : "Salvar e entrar"}
            </button>
          </div>
        </div>
      )}

      {aberto && (
        <div className="mt-5 space-y-5 text-[15px] leading-relaxed" style={{ color: TINTA }}>
          <Bloco titulo="📚 BNCC">
            <ul className="space-y-1.5">
              {dados.bncc.map((b) => (
                <li key={b.codigo}>
                  <span className="font-black">{b.codigo}</span> — {b.descricao}
                </li>
              ))}
            </ul>
          </Bloco>

          <Bloco titulo="🎯 Objetivos pedagógicos">
            <ul className="list-disc pl-5 space-y-1">
              {dados.objetivos.map((o, k) => <li key={k}>{o}</li>)}
            </ul>
          </Bloco>

          <Bloco titulo="🧰 Materiais">
            <div className="text-sm">
              <div className="font-black mb-1">Digitais</div>
              <ul className="list-disc pl-5 space-y-0.5 mb-3">
                {dados.materiaisDigitais.map((m, k) => <li key={k}>{m}</li>)}
              </ul>
              {dados.materiaisFisicos?.length ? (
                <>
                  <div className="font-black mb-1">Físicos (opcional)</div>
                  <ul className="list-disc pl-5 space-y-0.5">
                    {dados.materiaisFisicos.map((m, k) => <li key={k}>{m}</li>)}
                  </ul>
                </>
              ) : null}
            </div>
          </Bloco>

          <Bloco titulo="🧩 Adaptações — TEA">
            <ul className="list-disc pl-5 space-y-1">
              {dados.adaptacoesTEA.map((a, k) => <li key={k}>{a}</li>)}
            </ul>
          </Bloco>

          <Bloco titulo="⚡ Adaptações — TDAH">
            <ul className="list-disc pl-5 space-y-1">
              {dados.adaptacoesTDAH.map((a, k) => <li key={k}>{a}</li>)}
            </ul>
          </Bloco>

          <Bloco titulo="📏 Critérios de avaliação">
            <div className="space-y-3">
              {dados.criteriosAvaliacao.map((c, k) => (
                <div key={k} className="rounded-xl p-3 bg-[#F1E7D0]">
                  <div className="font-black">{c.criterio}</div>
                  <div className="text-sm mt-1"><strong>Observável:</strong> {c.observavel}</div>
                  <div className="text-sm"><strong>Consolidado quando:</strong> {c.consolidado}</div>
                </div>
              ))}
            </div>
          </Bloco>

          <Bloco titulo="👨‍👩‍👧 Orientações para pais">
            <ul className="list-disc pl-5 space-y-1">
              {dados.orientacoesPais.map((o, k) => <li key={k}>{o}</li>)}
            </ul>
          </Bloco>

          {dados.duracaoMin && (
            <div className="text-xs" style={{ color: TINTA + "80" }}>
              ⏱ Duração sugerida: {dados.duracaoMin[0]} a {dados.duracaoMin[1]} minutos.
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={() => { parent.lock(); setAberto(false); }}
              className="text-xs font-black underline"
              style={{ color: TINTA + "80" }}
            >
              Bloquear modo professor
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function Bloco({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-serif text-lg font-black mb-2">{titulo}</div>
      {children}
    </div>
  );
}
