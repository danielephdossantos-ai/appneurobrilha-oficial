
import { Difficulty, ActivityTemplate } from "./types";
import { OBJECTS, SCENARIOS } from "./assets";
import { DifficultyEngine } from "./difficulty-engine";

export class RandomizerEngine {
  static generateContent(template: ActivityTemplate, difficulty: Difficulty) {
    const itemsCount = DifficultyEngine.getItemsCount(difficulty);
    const scenario = this.getRandomItem(SCENARIOS);
    
    switch (template.type) {
      case "selection":
        return this.generateSelection(itemsCount, scenario);
      case "sequence":
        return this.generateSequence(itemsCount, scenario);
      case "matching":
        return this.generateMatching(itemsCount, scenario);
      default:
        return this.generateSelection(itemsCount, scenario);
    }
  }

  private static generateSelection(count: number, scenario: any) {
    const allObjects = [...OBJECTS];
    const selected = this.shuffle(allObjects).slice(0, count);
    const target = selected[0];
    
    return {
      type: "selection",
      scenario: scenario.id,
      question: `Encontre o(a) ${target.name} no(a) ${scenario.name}`,
      targetId: target.id,
      options: selected.map(obj => ({
        id: obj.id,
        content: obj.name,
        type: "text",
        isCorrect: obj.id === target.id
      }))
    };
  }

  private static generateSequence(count: number, scenario: any) {
    const allObjects = [...OBJECTS];
    const selected = this.shuffle(allObjects).slice(0, count);
    
    return {
      type: "sequence",
      scenario: scenario.id,
      question: `Coloque os objetos na ordem correta no(a) ${scenario.name}`,
      items: selected.map(obj => ({
        id: obj.id,
        content: obj.name
      }))
    };
  }

  private static generateMatching(count: number, scenario: any) {
    const allObjects = [...OBJECTS];
    const selected = this.shuffle(allObjects).slice(0, count);
    
    return {
      type: "matching",
      scenario: scenario.id,
      pairs: selected.map(obj => ({
        left: obj.id,
        right: obj.name // In a real app, this could be image vs name
      }))
    };
  }

  private static getRandomItem(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  private static shuffle(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }
}
