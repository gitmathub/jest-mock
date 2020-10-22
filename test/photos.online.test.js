import { expect } from '@jest/globals'
import { getPhotosByAlbumId } from '../src/photos'

describe('Photos is tested with ONLINE access', () => {
  it('returns the expected properties', async () => {
    const response = await getPhotosByAlbumId(1)
    expect(response.status).toBe(200)
    // console.log("response: ", response)
    const photos = response.data
    photos.forEach(photo => {
      expect(photo.id).toBeDefined()
      expect(photo.title).toBeDefined()
      expect(photo.url).toBeDefined()
    })
  })
})
