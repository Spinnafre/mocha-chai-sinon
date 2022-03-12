import chai, { expect } from 'chai'
import sinon from 'sinon'
import album from '../src/services/getAlbum.mjs'
import chaiPromised from 'chai-as-promised'
chai.use(chaiPromised)
// import fetch from 'node-fetch'

describe('with mock: getPhotosByAlbumId', () => {
    let sandbox
    beforeEach('Antes de rodar', function () {
        sandbox = sinon.createSandbox()
    })
    afterEach('Depois de rodar', function () {
        sandbox.restore()
    })

    it('should getPhotosByAlbumId', async () => {
        const myPhotos = [{
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        }];

        sandbox.stub(album, 'getAlbumId')
            .onFirstCall().resolves(myPhotos)
            .onSecondCall().resolves([
                {
                    "albumId": 1,
                    "id": 1,
                    "title": "accusamus beatae ad facilis cum similique qui sunt",
                    "url": "https://via.placeholder.com/600/92c952",
                    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                },
                {
                    "albumId": 2,
                    "id": 2,
                    "title": "accusamus beatae ad facilis cum similique qui sunt",
                    "url": "https://via.placeholder.com/600/92c952",
                    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                },
            ])
        // sandbox.stub(album,'getAlbumId')
        // .callsFake((id)=>{
        //     console.log('CHAMANDO COM ID ',id)
        //     return Promise.resolve(myPhotos)
        // })

        const albums = await album.getAlbumId(2)
        await album.getAlbumId(3)

        expect(albums).to.be.deep.equal(myPhotos)
        expect(album.getAlbumId.firstCall.firstArg).to.be.equal(2)
        expect(album.getAlbumId.secondCall.firstArg).to.be.equal(3)
    });
});