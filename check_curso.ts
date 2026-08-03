import curso from "./src/escola-brilha/curso-v4/portugues-5ano/curso";
console.log("Curso:", curso.titulo);
console.log("Unidades:", curso.unidades.length);
curso.unidades.forEach(u => {
  console.log(`- Unidade ${u.numero}: ${u.titulo} (${u.aulas.length} aulas)`);
});
