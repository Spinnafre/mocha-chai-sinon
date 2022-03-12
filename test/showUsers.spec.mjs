import chai from 'chai'
import { Users } from '../src/services/proto.mjs'
import { createSandbox } from 'sinon'
import chaiPromised from 'chai-as-promised'
chai.use(chaiPromised)
const expect=chai.expect
/*
console.log('Aguarde...')
setTimeout(()=>{
    console.log('Iniciando testes ')
    run() // Rodar todos os testes depois de 4s
},4000)*/

// root level
afterEach(()=>{
    console.log('OI') // a cada teste nesse arquivo irá executar a função
})
describe('#ShowUsers', () => {
    let sandbox
    let userRepository
    before(() => {
        userRepository = new Users()
        sandbox = createSandbox()
    })
    afterEach(() => {
        sandbox.restore()
    })
    it('Should be able create new User',async()=>{
        const user={
            name:'MARK',
            password:'123'
        }
        const resp=await userRepository.createUser(user)
        expect(resp).to.be.a('object').to.have.ownPropertyDescriptor('id')
        expect(resp.password).to.be.a('string').that.matches(/^[a-f0-9]{32}$/)
        expect(resp).to.include(user)
    })
    it('Should not be able create new User with password type number',async()=>{
        const user={
            name:'MARK',
            password:123
        }
        const resp= userRepository.createUser(user)
        await expect(resp).to.be.rejected
    })
    it('Should be able show users', async () => {
        const clock = sandbox.useFakeTimers()
        const promise = userRepository.getUsers()
        clock.tick(5000)
        const users=await promise
        expect(users).to.length.be(1)
    })
    //Pula esse teste e irá tornar com pendente
    it.skip('should not run that test suit',()=>{
        console.log('NÃO IRÁ SER RODADO')
    })

    it('test suite will be executed',done=>{
        console.log('ESTOU EXECUTANDO')
        done()
    })

    it('test suit not will be executed',function(){
        return this.skip()
    })
})