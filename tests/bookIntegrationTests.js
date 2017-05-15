var should = require('should'),
    request = require('supertest'),
    app = ('../app.js'),
    mongoose = require('mongoose'),
    Book = mongoose.model('Book'),
    agent = request.agent(app)

decribe('Book Crud Test', () => {
    it('should allow a book to pe posted and return and read and _id', (done) => {
        const bookPost = {
            title: 'Test Book',
            author: 'Test Author',
            gente: 'Test Genre'
        }

        agent.post('/api/books')
        .send(bookPost)
        .expect(200)
        .end((err, results) => {
            results.body.read.should.equal(false)
            results.body.should.have.property('_id')
            done()
        })
    })
    afterEach((done)=> {
        Book.remove().exec()
        done()
    })
})