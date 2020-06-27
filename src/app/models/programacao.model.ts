import { Time } from '@angular/common';

export class Programacao {
    idEvento: string;
    id: string;
    nomePalestrante: string;
    tipo: string;
    local?: string;
    vagas?: number;
    valor?:number;
    dataInicio?: Date;
    dataFinal?: Date;
    horaInicio?: Time;
    horaFinal?: Time;
}