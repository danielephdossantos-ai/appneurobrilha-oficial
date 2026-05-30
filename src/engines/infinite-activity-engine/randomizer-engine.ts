
import { Difficulty, ActivityTemplate } from "./types";
import { OBJECTS, SCENARIOS, CHARACTERS } from "./assets";
import { DifficultyEngine } from "./difficulty-engine";

export class RandomizerEngine {
  static generateContent(template: ActivityTemplate, difficulty: Difficulty) {
    const itemsCount = DifficultyEngine.getItemsCount(difficulty);
    const scenario = this.getRandomItem(SCENARIOS);
    const character = this.getRandomItem(CHARACTERS);
    
    switch (template?.type) {
      case "selection":
        return this.generateSelection(itemsCount, scenario, character);
      case "sequence":
        return this.generateSequence(itemsCount, scenario, character);
      case "matching":
        return this.generateMatching(itemsCount, scenario, character);
      case "sorting":
        return this.generateSorting(itemsCount, scenario, character);
      default:
        return this.generateSelection(itemsCount, scenario, character);
    }
  }

  private static generateSelection(count: number, scenario: any, character: any) {
    const allObjects = [...(OBJECTS || [])];
    if (allObjects.length === 0) return { type: "selection", question: "Objeto não encontrado" };
    
    const selected = this.shuffle(allObjects).slice(0, Math.max(1, count));
    const target = selected[0] || allObjects[0];
    
    return {
      type: "selection",
      scenario: scenario?.id || "sc_default",
      character: character?.id || "ch_default",
      title: `Missão com ${character?.name || "seu amigo"}`,
      question: `Olá! Eu sou o ${character?.name || "seu amigo"}. Você pode me ajudar a encontrar o(a) ${target?.name || "item"} aqui no(a) ${scenario?.name || "lugar"}?`,
      targetId: target.id,
      options: selected.map(obj => ({
        id: obj.id,
        content: obj.name,
        type: "text",
        isCorrect: obj.id === target.id
      }))
    };
  }

  private static generateSequence(count: number, scenario: any, character: any) {
    const allObjects = [...OBJECTS];
    const selected = this.shuffle(allObjects).slice(0, count);
    
    return {
      type: "sequence",
      scenario: scenario.id,
      character: character.id,
      title: `Organização no(a) ${scenario.name}`,
      question: `${character.name} precisa da sua ajuda para organizar estes itens na ordem em que apareceram:`,
      items: selected.map(obj => ({
        id: obj.id,
        content: obj.name
      }))
    };
  }

  private static generateMatching(count: number, scenario: any, character: any) {
    const allObjects = [...OBJECTS];
    const selected = this.shuffle(allObjects).slice(0, count);
    
    return {
      type: "matching",
      scenario: scenario.id,
      character: character.id,
      title: `Pares Mágicos`,
      question: `Combine cada item com seu nome correto para ajudar ${character.name}:`,
      pairs: selected.map(obj => ({
        left: obj.id,
        right: obj.name
      }))
    };
  }

  private static generateSorting(count: number, scenario: any, character: any) {
    const allObjects = [...OBJECTS];
    const selected = this.shuffle(allObjects).slice(0, count);
    const categories = Array.from(new Set(selected.map(o => o.category)));
    
    return {
      type: "sorting",
      scenario: scenario.id,
      character: character.id,
      title: `Separação Coletiva`,
      question: `Ajude ${character.name} a separar os itens por categoria:`,
      categories: categories,
      items: selected.map(obj => ({
        id: obj.id,
        content: obj.name,
        category: obj.category
      }))
    };
  }

  private static getRandomItem(array: any[]) {
    if (!array || array.length === 0) return { id: "unknown", name: "desconhecido" };
    return array[Math.floor(Math.random() * array.length)];
  }

  private static shuffle(array: any[]) {
    return [...array].sort(() => Math.random() - 0.5);
  }
}

