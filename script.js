
function pesquisar(){
const s=document.getElementById("sintoma").value.toLowerCase();

const sintomas={
"dor de cabeça":"🌿 Hortelã e Camomila",
"enxaqueca":"🌿 Hortelã e Alecrim",
"ansiedade":"🌼 Melissa e Camomila",
"estresse":"🌼 Melissa e Capim-cidreira",
"insônia":"🌙 Camomila e Capim-cidreira",
"tosse":"🍃 Guaco",
"resfriado":"🫚 Gengibre e Hortelã",
"gripe":"🫚 Gengibre e Guaco",
"dor de garganta":"🍃 Hortelã e Gengibre",
"congestão nasal":"🍃 Hortelã",
"dor de estômago":"🌿 Hortelã e Camomila",
"má digestão":"🌿 Hortelã",
"náusea":"🫚 Gengibre",
"azia":"🌱 Espinheira-santa",
"cólicas":"🌼 Camomila",
"gases":"🌿 Hortelã",
"cansaço":"🌿 Alecrim",
"falta de concentração":"🌿 Alecrim",
"agitação":"🌼 Melissa",
"nervosismo":"🌼 Camomila e Melissa"
};

let resultado="Sintoma não encontrado.";

for(let sintoma in sintomas){
 if(s.includes(sintoma)){
   resultado="Recomendação: "+sintomas[sintoma];
   break;
 }
}

document.getElementById("resultado").innerHTML=resultado;
}
