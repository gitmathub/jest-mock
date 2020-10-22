

// https://jestjs.io/docs/en/mock-functions#mock-property
describe("Mock return values", () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  it("Returns on the first call: 10", () => {

    expect(myMock()).toBe(10)
    expect(myMock.mock.calls.length).toBe(1)
  })
  it("Returns on the second call: x", () => {
    expect(myMock()).toBe("x")
    expect(myMock.mock.calls.length).toBe(2)
  })
  it("Returns on the thrid call: true", () => {
    expect(myMock()).toBeTruthy()
    expect(myMock.mock.calls.length).toBe(3)
  })
  it("Returns on the forth call: true", () => {
    expect(myMock()).toBeTruthy()
    expect(myMock.mock.calls.length).toBe(4)
  })
})
