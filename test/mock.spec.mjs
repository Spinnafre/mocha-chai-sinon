import chai, { expect } from 'chai'
import chaiPromised from 'chai-as-promised'
import { afterEach } from 'mocha';
import sinon, { createSandbox } from 'sinon'

chai.use(chaiPromised)


describe('Mock tests', () => {
    let sandbox
    beforeEach(function () {
        sandbox = createSandbox()
    })
    afterEach(function () {
        sandbox.restore()
    })

    it('should call', () => {
        const myAPI = {
            users:[
                { id: 1, name: 'u1' },
                { id: 2, name: 'u2' },
                { id: 3, name: 'u3' },
            ],
            getUsers: function () {
                return this.users
            },
            setUser:function(user){
                this.users.push(user)
            }
        }

        const mock = sinon.mock(myAPI)
        mock.expects('setUser').withExactArgs({id:4,name:'u4'}).once()
        myAPI.setUser({id:4,name:'u4'})
        mock.expects('getUsers').atLeast(1).atMost(2)
        const u = myAPI.getUsers()
        
        mock.verify()//Verificar todos os expects que eu mesmo criei
    });
});