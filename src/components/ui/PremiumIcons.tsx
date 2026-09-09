import {
  Bird,
  Apple,
  Car,
  Dog,
  Cat,
  Star,
  Heart,
  Sun,
  Moon,
  Trees,
  Flower,
  Circle,
  Plane,
  Ship,
  Fish,
  BookOpen,
  Pencil,
  Ruler,
  School,
  Home,
  Rainbow,
  Bug,
  Telescope,
  TestTube,
  Map,
  Satellite,
  Brain,
  Target,
  Sparkles,
  Beef,
  Egg,
  Banana,
  Grape,
  Bone,
  Waves,
  Sprout,
  Tractor,
  Pizza,
  Crown,
  IceCream,
  Music,
  Gift,
  Rocket,
  Bike,
  GlassWater,
  Ghost,
  Zap,
  Cloud,
  Triangle,
  Square,
} from "lucide-react";
import { ComponentType } from "react";

export const PremiumIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  const map: Record<string, any> = {
    apple: Apple,
    car: Car,
    dog: Dog,
    cat: Cat,
    star: Star,
    heart: Heart,
    sun: Sun,
    moon: Moon,
    bird: Bird,
    tree: Trees,
    flower: Flower,
    circle: Circle,
    plane: Plane,
    ship: Ship,
    fish: Fish,
    book: BookOpen,
    pencil: Pencil,
    ruler: Ruler,
    school: School,
    home: Home,
    rainbow: Rainbow,
    bug: Bug,
    telescope: Telescope,
    testtube: TestTube,
    map: Map,
    satellite: Satellite,
    brain: Brain,
    target: Target,
    sparkles: Sparkles,
    beef: Beef,
    egg: Egg,
    banana: Banana,
    grape: Grape,
    bone: Bone,
    waves: Waves,
    sprout: Sprout,
    tractor: Tractor,
    pizza: Pizza,
    crown: Crown,
    icecream: IceCream,
    music: Music,
    gift: Gift,
    rocket: Rocket,
    bike: Bike,
    glasswater: GlassWater,
    ghost: Ghost,
    zap: Zap,
    cloud: Cloud,
    triangle: Triangle,
    square: Square,
  };
  const Icon = map[name.toLowerCase()] || Star;
  return <Icon className={className} />;
};

export const RenderVisual = ({ value, className }: { value: string; className?: string }) => {
  if (!value) return null;

  // Mapping comprehensive emoji to lucide icons for Pre-School (where emojis are forbidden)
  const emojiMap: Record<string, string> = {
    "🍎": "apple",
    "🍏": "apple",
    "🚗": "car",
    "🐶": "dog",
    "🐱": "cat",
    "⭐": "star",
    "❤️": "heart",
    "☀️": "sun",
    "🌙": "moon",
    "🐦": "bird",
    "🌳": "tree",
    "🌸": "flower",
    "🌈": "rainbow",
    "🎓": "school",
    "📚": "book",
    "✨": "sparkles",
    "🐝": "bug",
    "🐘": "beef",
    "⛪": "home",
    "🥚": "egg",
    "🍇": "grape",
    "🍌": "banana",
    "🦴": "bone",
    "🏠": "home",
    "🥣": "music",
    "🚜": "tractor",
    "🌿": "tree",
    "💻": "brain",
    "⚽": "target",
    "🌊": "waves",
    "🌽": "sprout",
    "🏚️": "home",
    "🍕": "pizza",
    "🥩": "beef",
    "👑": "crown",
    "🍦": "icecream",
    "🧶": "music",
    "🧺": "gift",
    "🚀": "rocket",
    "👜": "gift",
    "🥛": "glasswater",
    "🚲": "bike",
    "✈️": "plane",
    "🚢": "ship",
    "🐮": "beef",
    "🐄": "beef",
    "🐔": "bird",
    "⭕": "circle",
    "🟦": "square",
    "🔺": "triangle",
    "☁️": "cloud",
    "🌵": "sprout",
    "🌻": "flower",
    "🎈": "gift",
  };

  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  if (emojiRegex.test(value)) {
    const key = emojiMap[value] || "star";
    return <PremiumIcon name={key} className={className} />;
  }

  return <PremiumIcon name={value} className={className} />;
};

export const RenderMascote = ({ icon, className }: { icon: any; className?: string }) => {
  if (!icon) return <Bird className={className} />;

  if (typeof icon === "string") {
    if (icon.includes("/") || icon.includes(".") || icon.startsWith("data:")) {
      return <img src={icon} alt="Mascote" className={className} />;
    }
    return <RenderVisual value={icon} className={className} />;
  }

  const IconComp = icon as ComponentType<{ className?: string }>;
  return <IconComp className={className} />;
};
