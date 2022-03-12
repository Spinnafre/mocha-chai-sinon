import chai from 'chai'
import chaiPromised from 'chai-as-promised'
chai.use(chaiPromised)
const expect=chai.expect

describe.skip('# testing slow tests', function () {
    it('should be complete in a second', function(done){
        // Teste irá ser considerado lento a partir de 500 ms
        this.slow(100)
        setTimeout(done,1000)
    });
    it('should be complete in 5 seconds',function(done){
        this.slow(5000) // Irá ser considerado lento a partir de 5s
        this.timeout(5000) // máximo para dar timeout será 5s
        setTimeout(done,4000)
    })
});