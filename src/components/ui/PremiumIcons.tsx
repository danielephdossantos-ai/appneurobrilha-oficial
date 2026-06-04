import { Bird, Apple, Car, Dog, Cat, Star, Heart, Sun, Moon, Trees, Flower, Circle, Plane, Ship, Fish, BookOpen, Pencil, Ruler, School, Home, Rainbow, Bug, Telescope, TestTube, Map, Satellite, Brain, Target, Sparkles } from "lucide-react";
import { ComponentType } from "react";

export const PremiumIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  const map: Record<string, any> = {
    "apple": Apple, "car": Car, "dog": Dog, "cat": Cat, "star": Star, 
    "heart": Heart, "sun": Sun, "moon": Moon, "bird": Bird, "tree": Trees, 
    "flower": Flower, "circle": Circle, "plane": Plane, "ship": Ship, 
    "fish": Fish, "book": BookOpen, "pencil": Pencil, "ruler": Ruler, 
    "school": School, "home": Home, "rainbow": Rainbow, "bug": Bug, 
    "telescope": Telescope, "testtube": TestTube, "map": Map, 
    "satellite": Satellite, "brain": Brain, "target": Target, "sparkles": Sparkles
  };
  const Icon = map[name.toLowerCase()] || Star;
  return <Icon className={className} />;
};

export const RenderVisual = ({ value, className }: { value: string; className?: string }) => {
  if (!value) return null;
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  if (emojiRegex.test(value)) {
    const emojiMap: Record<string, string> = {
      "🍎": "apple", "🚗": "car", "🐶": "dog", "🐱": "cat", "⭐": "star",
      "❤️": "heart", "☀️": "sun", "🌙": "moon", "🐦": "bird", "🌳": "tree",
      "🌸": "flower", "🌈": "rainbow", "🎓": "school", "📚": "book", "✨": "sparkles"
    };
    const key = emojiMap[value] || "star";
    return <PremiumIcon name={key} className={className} />;
  }
  return <PremiumIcon name={value} className={className} />;
};

export const RenderMascote = ({ icon, className }: { icon: any; className?: string }) => {
  if (!icon) return <Bird className={className} />;
  
  if (typeof icon === 'string') {
    // Se for um caminho de imagem ou URL
    if (icon.includes('/') || icon.includes('.') || icon.startsWith('data:')) {
      return <img src={icon} alt="Mascote" className={className} />;
    }
    return <RenderVisual value={icon} className={className} />;
  }
  
  const IconComp = icon as ComponentType<{ className?: string }>;
  return <IconComp className={className} />;
};

