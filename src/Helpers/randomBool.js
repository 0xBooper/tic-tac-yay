export default function RandomBool(randomness) {
    let randomnessVar = randomness < 10 ? randomness / 10 : null // If randomness is single-digit, make it a decimal. Otherwise, make it NULL

    // If randomness var is NULL, error and return early
    if (!randomnessVar) {
        console.error("Randommness Parameter must be single digit.")
        return
    }

    return Math.random() < randomnessVar // Return true/false if randomnessVar is greater than Math.random

}