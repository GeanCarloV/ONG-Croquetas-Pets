export class Servicios {
    NombrePersona: string;
    ServicioDO: string;
    ValorCroque: number;
    MaxdeHoras: number;

    constructor(NombrePersona: string, ServicioDO: string, ValorCroque: number, MaxdeHoras: number) {
        this.NombrePersona = NombrePersona;
        this.ServicioDO = ServicioDO;
        this.ValorCroque = ValorCroque;
        this.MaxdeHoras = MaxdeHoras;
    }

}
