import { dummyOutput } from '../../src/Dummy'

describe("Dummy Test", () => {

    it("should calculate the cube of a positive number", () => {
        const dummyOutputReturned = dummyOutput("hello")
        expect(dummyOutputReturned).toBe("hellohello")
    })
})