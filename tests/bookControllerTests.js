const should = require('should'),
    sinon = require('sinon')

//import should from 'should'
//import sinon from 'sinon'

describe('Book Controller Tests:', () => {
    describe('Post', () => {
        it('Should not allow an empty title on post', () => {
            const Book = (book) => this.save() = () => {}

            const req = {
                body: {
                    author: 'Gabo'
                }
            }
            const res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            const bookController = require('../controllers/bookController')(Book)

            bookController.post(req, res)

            res.status.calledWith(400).should.equal(true, 'Bad Status' + res.status.args[0][0])
            res.send.calledWith('Title is required').should.equal(true)
        })
    })
})