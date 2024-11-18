import {z} from "zod";


const twoCharacters = z.string().length(2);
type TwoCharacters = z.infer<typeof twoCharacters>
const oneCharacter = z.string().length(1);
type OneCharacter = z.infer<typeof oneCharacter>
const oneNumber = z.string().regex(/^[0-9]$/);
type OneNumber = z.infer<typeof oneNumber>
const singleUpperCaseLetter = z.string().regex(/^[A-Z]$/);
type SingleUpperCaseLetter = z.infer<typeof singleUpperCaseLetter>
type TwoNumbers = `${OneNumber}${OneNumber}`

export default interface PiraIndex {
  [key: OneNumber]: {
    name: string
    subcategories: {
      [key: SingleUpperCaseLetter]: {
        name: string
        topics: {
          [key: TwoNumbers]: {
            name: string
          }
        }
      }
    }
  }
}