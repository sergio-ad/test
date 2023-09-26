const decode = (string) => string
    .match(/(\.|\-)\d+/g)
    .map(x => new Array(Number(x.slice(1))).fill(x.startsWith('.') ? 1 : 0))
    .map(x => x.length === 1 ? '.' : String((x.length - 2) / 2))
    .join('')
    .split('.')
    .flatMap((x, i, arr) => i % 2 === 0 ? [[ x, arr[i + 1]]] : [])
    .sort((a, b) => a[1] - b[1])
    .map(x => String.fromCharCode(x[0])).join('');
