import json

# Lista expandida de variações temáticas para o Pip
# Vamos usar as bases visuais que já temos para criar 50 itens únicos no catálogo
# O objetivo é dar nomes específicos e criativos para cada uma.

TEMAS = [
    ("Dinossauros", "dinossauros", ["T-Rex", "Tricerátops", "Velociraptor", "Pterodáctilo", "Braquiossauro", "Espinossauro"]),
    ("Espaço", "espaco", ["Astronauta", "Capitão Galáctico", "Viajante Estelar", "Cadete Espacial", "Explorador de Marte"]),
    ("Heróis", "super-herois", ["Super Pip", "Defensor da Justiça", "Herói do Saber", "Guardião da Escola"]),
    ("Educação", "arte", ["Mestre da Leitura", "Gênio da Matemática", "Pequeno Cientista", "Pintor Criativo", "Escritor Mirim"]),
    ("Veículos", "veiculos", ["Piloto Aventureiro", "Comandante do Ar", "Navegador dos Sete Mares", "Motorista Alegre"]),
    ("Trânsito", "carros", ["Piloto de Fórmula 1", "Mecânico Esperto", "Fiscal de Trânsito", "Aventureiro das Pistas"]),
    ("Ferrovia", "trens", ["Maquinista de Trem", "Condutor de Aventuras", "Chefe da Estação"]),
    ("Robótica", "robos", ["Pip Android", "Robô Amigo", "Engenheiro Espacial", "Mestre da Tecnologia"]),
    ("Fazenda", "fazendinha", ["Fazendeiro Pip", "Cuidador de Animais", "Protetor da Natureza", "Pequeno Cultivador"]),
    ("Realeza", "princesas", ["Príncipe da Sabedoria", "Cavaleiro Gentil", "Guardião do Castelo"]),
    ("Minecraft", "minecraft", ["Construtor de Blocos", "Minerador de Ideias", "Arquiteto de Mundos"]),
    ("Música", "musica", ["Maestro Pip", "Pequeno Pianista", "Estrela do Rock", "Mestre do Ritmo"]),
    ("Natureza", "animais", ["Veterinário Pip", "Explorador da Selva", "Amigo dos Pets", "Guarda Florestal"])
]

all_costumes = []
count = 0

for tema_nome, skin_key, variações in TEMAS:
    for var in variações:
        if count >= 50: break
        all_costumes.append({
            "name": f"Pip {var}",
            "description": f"Uma transformação exclusiva de {tema_nome} para sua jornada!",
            "type": "costume",
            "category": tema_nome,
            "required_level": (count // 5) + 1,
            "required_coins": (count + 1) * 120,
            "image_url": f"SKIN:{skin_key}"
        })
        count += 1

# Se não chegou a 50, completar com variações VIP
if count < 50:
    for i in range(50 - count):
        all_costumes.append({
            "name": f"Pip Edição Especial {i+1}",
            "description": "Uma fantasia ultra-rara para mestres do conhecimento!",
            "type": "costume",
            "category": "Especial",
            "required_level": 10,
            "required_coins": 5000 + (i * 500),
            "image_url": "SKIN:super-herois"
        })

# Gerar SQL
sql = "DELETE FROM public.mascot_catalog_items WHERE type = 'costume';\n"
sql += "INSERT INTO public.mascot_catalog_items (name, description, type, category, required_level, required_coins, image_url) VALUES \n"

values = []
for item in all_costumes:
    values.append(f"('{item['name']}', '{item['description']}', '{item['type']}', '{item['category']}', {item['required_level']}, {item['required_coins']}, '{item['image_url']}')")

sql += ",\n".join(values) + ";"

with open('update_50_costumes.sql', 'w') as f:
    f.write(sql)
