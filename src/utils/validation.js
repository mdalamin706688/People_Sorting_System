export function validateCount(count) {
    return count >= 20 && count <= 100;
}
export function isSorted(people) {
    for (let i = 1; i < people.length; i++) {
        if (people[i - 1].potatoes < people[i].potatoes) {
            return false;
        }
    }
    return true;
}
