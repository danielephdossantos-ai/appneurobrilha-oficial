import json

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
    "Veículos": "veiculos"
}

# Novos itens específicos solicitados
COSTUMES = [
    ("Pip T-Rex", "Dinossauros", "dinossauros"),
    ("Pip Tricerátops", "Dinossauros", "dinossauros"),
    ("Pip Velociraptor", "Dinossauros", "dinossauros"),
    ("Pip Pterodáctilo", "Dinossauros", "dinossauros"),
    ("Pip Astronauta", "Espaço", "espaco"),
    ("Pip Robô Espacial", "Espaço", "robos"),
    ("Pip Capitão Galáctico", "Espaço", "espaco"),
    ("Pip Piloto de Corrida", "Veículos", "carros"),
    ("Pip Aviador", "Veículos", "veiculos"),
    ("Pip Maquinista", "Veículos", "trens"),
    ("Pip Herói Matemática", "Heróis", "super-herois"),
    ("Pip Herói Leitura", "Heróis", "arte"),
    ("Pip Herói Ciência", "Heróis", "espaco")
]

TOYS = [
    ("Carrinho", "Brinquedos", "carros"),
    ("Trem", "Brinquedos", "trens"),
    ("Bola", "Brinquedos", "arte"),
    ("Ursinho", "Brinquedos", "animais"),
    ("Dino de Pelúcia", "Brinquedos", "dinossauros"),
    ("Piano", "Brinquedos", "musica"),
    ("Telescópio", "Brinquedos", "espaco"),
    ("Blocos de Montar", "Brinquedos", "minecraft")
]

# Gerar SQL
sql = "DELETE FROM public.mascot_catalog_items;\n"
sql += "INSERT INTO public.mascot_catalog_items (name, description, type, category, required_level, required_coins, image_url) VALUES \n"

values = []
# Adicionar Fantasias
for i, (name, cat, skin) in enumerate(COSTUMES):
    values.append(f"('{name}', 'Fantasia exclusiva para o Pip!', 'costume', '{cat}', 1, {(i+1)*100}, 'SKIN:{skin}')")

# Adicionar Brinquedos
for i, (name, cat, skin) in enumerate(TOYS):
    values.append(f"('{name}', 'Brinquedo exclusivo para o Pip!', 'toy', '{cat}', 1, {(i+1)*150}, 'SKIN:{skin}')")

sql += ",\n".join(values) + ";"

with open('update_catalog_visuals.sql', 'w') as f:
    f.write(sql)
