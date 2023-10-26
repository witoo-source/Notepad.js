import readline from 'readline-sync'
import chalk from 'chalk';

const ln = "------------------------------";

class Note {
    constructor(name) {
        this.name = name;
        this.content = readline.question(chalk.blue.bold(`Nota creada :), Disfruta escribiendo :D`) + `\n${ln}\n`);
    }
}

const notes = [];

function createNote () {
    const qname = readline.question(chalk.bold.bgBlue("Nombre de la nota: "));
    const note = new Note(qname);
    notes.push(note);
    console.log(ln);
    console.log(chalk.green.underline(`Nota guardada con exito!`));
    console.log(ln);
    main();
}

function readNote () {
    if (notes.length == 0) {
        console.log(chalk.red(`No tienes ninguna nota, volviendo al menu principal...`));
        console.log(ln);
        main();
        return;
    }
    let nfind = readline.question(chalk.bold.bgBlue("Nombre de la nota a buscar: "));
    let find = false;
    for (let i = 0; i < notes.length; i++) {
        if (nfind == notes[i].name) {
            console.log(ln);
            console.log(chalk.green(`Nota encontrada!`));
            console.log(ln);
            console.log(chalk.yellow.underline.bold(`Contenido de la nota:`));
            console.log(ln);
            console.log(notes[i].content);
            console.log(ln);
            find = true;
            readline.keyInPause('Presiona una tecla para continuar...');
            console.log(ln);
            console.log(chalk.green.underline(`Volviendo al menu principal...`));
            console.log(ln);
            break;
        } 
    }
    if (!find) {
        console.log(ln)
        console.log(chalk.red.bold(`No hay ninguna nota con ese nombre.`));
        console.log(ln)
    }
    main();
}

function main () {
    console.log(chalk.green.bold.underline(`Notepad.js! // Developed by Wito and protected for Copyright | © | 2023`));
    console.log(ln);
    console.log(chalk.yellow("Elige una opcion:") + chalk.yellow.bold("\n1) Crear nota\n2) Leer nota\n3) Salir de Notepad.js"));
    const resp = readline.question(chalk.bold("Escribe aqui el numero: "));
    if (resp === "1") {
        createNote();
    } else if (resp === "2") {
        readNote();
    } else if (resp === "3") {
        process.exit(0);
    } else {
        console.log(chalk.red("Opcion no valida, escribe 1, 2 o 3"));
        main()
    }
}

main();