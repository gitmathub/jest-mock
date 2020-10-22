const myMock = jest.fn(() => "return value")

const a = new myMock("first arg", "second arg")
const b = {}
const bound = myMock.bind(b)
bound();

console.log("instances", myMock.mock.instances)
console.log("calls", myMock.mock.calls)

// https://jestjs.io/docs/en/mock-functions#mock-property
describe("Mock instances", () => {
  it("The function was called exactly twice", () => {
    expect(myMock.mock.calls.length).toBe(2)
  })
  it("The first arg of the first call to the function was 'first arg'", () => {
    expect(myMock.mock.calls[0][0]).toBe('first arg')
  })
  it("The second arg of the first call to the function was 'second arg'", () => {
    expect(myMock.mock.calls[0][1]).toBe('second arg')
  })
  it("The return value of the first call to the function was 'return value'", () => {
    expect(myMock.mock.results[0].value).toBe('return value')
  })
  it("This function was instantiated exactly twice", () => {
    expect(myMock.mock.instances.length).toBe(2);
  })
  // this acutally doesn't work
  xit("The function was called exactly once", () => {
    console.log(myMock.mock.instances[0].name)
    // The object returned by the first instantiation of this function
    // had a `name` property whose value was set to 'test'
    expect(myMock.mock.instances[0].name).toEqual('undefined');
  })
})
