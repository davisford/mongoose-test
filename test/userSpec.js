var User = require('../models/user'),
  mongoose = require('mongoose'),
  should = require('should');

mongoose.connection.on('error', function (err) {
  console.log('mongoose err: ', err);
});

mongoose.connection.on('open', function () {
  console.log('mongoose connection established');
});

describe('User', function () {

  before(function (done) {
    mongoose.connect('mongodb://localhost/mongoosetest');
    done();
  });

  after(function (done) {
    mongoose.disconnect(function () {
      console.log('mongoose disconnected');
      done();
    });
  });

  beforeEach(function (done) {
    // remove all users
    User.remove({}, function (err) {
      if (err) { return done(err); }
      done();
    });
  });

  it('should save a new user', function (done) {
    var user = new User({name: 'Foo', email: 'foo@bar.com'});
    user.save(function (err, doc) {
      if (err) { return done(err); }
      if (!doc) { return done("User was not persisted"); }
      doc.should.have.property('name');
      doc.name.should.equal('Foo');
      doc.should.have.property('email');
      doc.email.should.equal('foo@bar.com');
      done();
    });
  });

});