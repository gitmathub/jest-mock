import axios from 'axios';
import * as users from '../src/users';

jest.mock('axios');

describe("Mock module", () => {

  // this won't work if axios is mocked
  // it("non mocking call", async () => {
  //   const resonse = await users.all()
  //   expect(resonse.data.length).toBeTruthy()
  // })

  it("fetches users", async () => {
    const expected = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham'
        }
      ]
    }
    axios.get.mockResolvedValue(expected);

    const result = await users.all()
    expect(result.data.length).toBeTruthy()
    expect(result).toEqual(expected);
  })
})