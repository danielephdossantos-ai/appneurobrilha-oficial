import json
import uuid
import random

# Definindo as categorias e variações de atividades
categorias = [
    {
        "title": "Cidade das Letras - Vogais",
        "category": "portugues",
        "bncc_field": "escuta_fala",
        "skill_bncc": "EI03EF01",
        "templates": [
            {
                "display_text": "ENCONTRE A LETRA {vogal}",
                "speech_text": "Olá amiguinho! Encontre para mim a letra {vogal}, de {exemplo}!",
                "correct": "{emoji} {vogal}",
                "distractors": ["🐶 P", "🚗 O", "🍎 B", "🐱 M"]
            }
        ],
        "data": [
            ("A", "abelha", "🐝"), ("E", "elefante", "🐘"), ("I", "igreja", "⛪"), ("O", "ovo", "🥚"), ("U", "uva", "🍇")
        ]
    },
    {
        "title": "Vale dos Números - Contagem",
        "category": "matematica",
        "bncc_field": "espacos_tempos",
        "skill_bncc": "EI03ET07",
        "templates": [
            {
                "display_text": "QUANTAS {objeto}?",
                "speech_text": "Hum, que {objeto} deliciosas! Quantas {objeto} existem na tela?",
                "correct": "{num}",
                "distractors": ["1", "2", "3", "4", "5"]
            }
        ],
        "data": [
            ("maçãs", "maça"), ("bananas", "banana"), ("estrelas", "estrela"), ("flores", "flor"), ("bolas", "bola")
        ]
    }
]

sql_statements = []

# Gerando 200 atividades
for i in range(200):
    cat = random.choice(categorias)
    lesson_id = str(uuid.uuid4())
    
    # Lesson insert
    sql_statements.append(f"INSERT INTO public.lessons (id, title, category, bncc_field, skill_bncc) VALUES ('{lesson_id}', '{cat['title']} {i+1}', '{cat['category']}', '{cat['bncc_field']}', '{cat['skill_bncc']}');")
    
    # Generating 1 step per lesson for simplicity in this seed
    step_id = str(uuid.uuid4())
    template = random.choice(cat['templates'])
    
    if cat['category'] == 'portugues':
        item = random.choice(cat['data'])
        display = template['display_text'].format(vogal=item[0])
        speech = template['speech_text'].format(vogal=item[0], exemplo=item[1])
        correct = template['correct'].format(emoji=item[2], vogal=item[0])
        options = [correct] + random.sample([d for d in template['distractors'] if d != correct], 2)
        random.shuffle(options)
        elements = json.dumps([{"id": "el1", "type": "text", "content": correct, "position": {"x": 0, "y": 0}, "animation": "pop", "delay": 0.2}])
    else:
        item = random.choice(cat['data'])
        num = str(random.randint(1, 5))
        display = template['display_text'].format(objeto=item[0].upper())
        speech = template['speech_text'].format(objeto=item[0])
        correct = num
        options = [num] + random.sample([d for d in template['distractors'] if d != num], 2)
        random.shuffle(options)
        # Create elements based on count
        el_list = []
        for j in range(int(num)):
            el_list.append({"id": f"obj{j}", "type": "text", "content": item[1], "position": {"x": (j-int(num)/2)*40, "y": 0}, "animation": "pop", "delay": 0.2*j})
        elements = json.dumps(el_list)

    interaction = json.dumps({"type": "click", "correctAnswer": correct, "options": options})
    
    sql_statements.append(f"INSERT INTO public.lesson_steps (lesson_id, step_id_internal, phase, type, mascot, display_text, speech_text, elements, interaction, order_index) VALUES ('{lesson_id}', 's1', 'practice', 'interaction', 'pipa', '{display}', '{speech}', '{elements}', '{interaction}', 1);")

with open('seed_data.sql', 'w') as f:
    f.write("\n".join(sql_statements))
