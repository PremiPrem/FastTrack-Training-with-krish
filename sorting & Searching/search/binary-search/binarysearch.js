const binarySearch = (array, target) => {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const target = array[mid]

        if (target === array[mid] ) {
            return mid
        }

        if ( target > array[mid] ) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null //if not found
}

module.exports = { binarySearch };