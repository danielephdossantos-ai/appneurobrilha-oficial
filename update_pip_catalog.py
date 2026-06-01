import os
import json

# Mapeamento de categorias reais para os assets que já temos no projeto
ASSET_MAPPING = {
    "Dinossauros": "dinossauros",
    "Espaço": "espaco",
    "Arte": "arte",
    "Animais": "animais",
    "Música": "musica",
    "Fazendinha": "fazendinha",
    "Super-Heróis": "super-herois",
    "Princesas": "princesas",
    "Minecraft": "minecraft",
    "Carros": "carros",
    "Trens": "trens",
    "Robôs": "robos",
    "Veículos": "veiculos",
    "Maestro": "musica",
    "Astronauta": "espaco",
    "Explorador": "dinossauros",
    "Construtor": "minecraft"
}

categories = list(ASSET_MAPPING.keys())

costumes = []
for i in range(1, 51):
    category = categories[(i-1) % len(categories)]
    skin_key = ASSET_MAPPING[category]
    costumes.append({
        "name": f"Pip {category} " + (f"V{i//len(categories) + 1}" if i > len(categories) else ""),
        "description": f"Uma incrível transformação temática de {category} para o seu Pip!",
        "type": "costume",
        "category": category,
        "required_level": (i // 5) + 1,
        "required_coins": i * 150,
        "image_url": f"SKIN:{skin_key}" # Prefixo especial para identificarmos no frontend
    })

toys = []
toy_names = ["Blocos de Montar", "Robô Educativo", "Quebra-Cabeça Solar", "Kit de Pintura Mágica", "Telescópio Estelar", 
             "Lupa de Explorador", "Piano de Cristais", "Mini Laboratório", "Ábaco de Ouro", "Livro Falante",
             "Globo Terrestre", "Microscópio", "Drone de Estudo", "Tablet de Desenho", "Xilofone", 
             "Cubo Mágico", "Trem de Letras", "Foguete de Papelão", "Castelo de Areia", "Pipa Cromática",
             "Bola de Sabão", "Jogo da Memória", "Dominó de Números", "Tangram", "Bússola",
             "Relógio Solar", "Kaleidoscópio", "Maquete Vulcão", "Kit Robótica", "Mapa do Tesouro"]

for i, name in enumerate(toy_names):
    toys.append({
        "name": name,
        "description": f"Um brinquedo que ajuda o Pip a aprender {name.lower()} com você!",
        "type": "toy",
        "category": "Educativo",
        "required_level": (i // 3) + 1,
        "required_coins": (i + 1) * 200,
        "image_url": None
    })

all_items = costumes + toys

# Gerar SQL para deletar os placeholders e inserir os novos
sql = "DELETE FROM public.mascot_catalog_items;\n"
sql += "INSERT INTO public.mascot_catalog_items (name, description, type, category, required_level, required_coins, image_url) VALUES \n"

values = []
for item in all_items:
    img = f"'{item['image_url']}'" if item['image_url'] else "NULL"
    values.append(f"('{item['name']}', '{item['description']}', '{item['type']}', '{item['category']}', {item['required_level']}, {item['required_coins']}, {img})")

sql += ",\n".join(values) + ";"

with open('update_catalog.sql', 'w') as f:
    f.write(sql)
