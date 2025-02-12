// export type ActionCounter =
// | { type: 'counter/minus10' }
// | { type: 'counter/minus' }
// | { type: 'counter/plus' }
// | { type: 'counter/plus10' }

// // { type: string, payload?: any }


export type ActionCounter = {
    type: 'counter/change',
    payload: number
}
