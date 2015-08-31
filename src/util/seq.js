export function toMap (key = "id") {
    return this.reduce((m,x) => m.set(x[key],x), new Map());
}

export function into (Constructor) {
    return Constructor === Array ?
        Array.from(this) :
        new Constructor(this);
}
