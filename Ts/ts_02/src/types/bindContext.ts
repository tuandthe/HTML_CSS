// bindContext
export const car ={
    band : "Toyota",
    start(){
        console.log(`Starting the car ${this.band}`);
    }    
}

// Class Async
export class Timer{
    constructor(public name: number){}

    tick = () => {
       console.log(`${this.name} tick...`);
    }
}

// Generic call/apply
export function introduce(this: { name: string }, msg: string) {
    console.log(`${msg}, I am ${this.name}`);
}