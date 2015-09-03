
export function into (Constructor) {
    return Constructor === Array ?
        Array.from(this) :
        new Constructor(this);
}


const getId = (x) => x.id;

// Iter s :: (s -> t) -> Map t s
export function toMap (getKey = getId) {
    return this.reduce((m,x) => m.set(getKey(x),x), new Map());
}

// Iter s :: (s -> t) -> Map t [s]
export function partition (getKey) {
    const m = new Map();

    for (const value of this) {
        const key = getKey(value);

        if (m.has(key)) {
            const oldValue = m.get(key);
            oldValue.push(value);
            m.set(key,oldValue);
        } else {
            m.set(key, [value]);
        }
    }

    return m;
}
