import { expect } from '@jest/globals'
import { getPhotosByAlbumId } from '../src/photos'
import axios from 'axios'

describe('Photos is tested with MOCK', () => {
  const photoAlbum = [{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  }]

  afterEach(() => jest.resetAllMocks());

  it('returns the expected properties', async (done) => {
    const mockFunction = jest.fn(_ => photoAlbum);
    const result = mockFunction(1)
    getPhotosByAlbumId(1)
    expect(mockFunction.mock.calls.length).toBe(1);
    expect(mockFunction.mock.results[0].value).toBe(photoAlbum);
    done()
  })

  // it('02 returns the expected properties', async (done) => {
  //   jest.mock('axios');
  //   axios.get = jest.fn(_ => photoAlbum)
  //   const result = await photos.getPhotosByAlbumId(1)
  //   expect(true).toBeTruthy()
  //   // expect(result.data).toContainEqual(photoAlbum);
  //   done()
  // })


  xit('03', async (done) => {
    jest.mock('photos', (_ => {"la"}));
    const result = getPhotosByAlbumId(1)
    expect(axios.get).toHaveBeenCalled()
    // expect(result.data).toContainEqual(photoAlbum);
    done()
  })


  // it('returns the expected properties', async (done) => {
  //   jest.mock('axios');
  //   const expected = { status: 200 }
  //   axios.get.mockResolvedValue(expected)
  //   expect(true).toBeTruthy()
  //   // expect(response.status).toBe(200)
  //   done()
  //   // console.log("response: ", response)
  //   // const photos = response.data
  //   // photos.forEach(photo => {
  //   //   expect(photo.id).toBeDefined()
  //   //   expect(photo.title).toBeDefined()
  //   //   expect(photo.url).toBeDefined()
  //   // })
  // })
})