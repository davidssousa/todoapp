

export class Todo {
    
    public id: number;
    public texto: string;
    public completed: boolean

    constructor(texto: string) {
        this.texto = texto;

        this.id = Math.random();
        this.completed = false;
    }
}