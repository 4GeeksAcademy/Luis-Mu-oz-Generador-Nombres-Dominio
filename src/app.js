let pronombre = [`el`, `la`, `nuestro`, `nuestra`]
let adjetivos = [`gigante`, `enorme`, `gran`]
let sustantivos =[`nadador`, `gato`, `dragon`, `coete`, `coche`]

for (const p of pronombre){
    for (const a of adjetivos){
        for (const s of sustantivos){
            console.log(`${p}${a}${s}.com`);
            
        }
    }
}