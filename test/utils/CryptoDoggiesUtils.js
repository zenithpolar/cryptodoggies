module.exports = function(CryptoDoggies, accounts) {
  function checkDoggyCreation(name, age, dna) {
    it("createDoggy should create a doggy named" + name, function(done) {
      CryptoDoggies.deployed()
        .then(async function(instance) {
          await instance.createDoggy(name, age, dna, { from: accounts[0] }).then(function(result) {
            console.log(result);
            assert.include(result.logs[0].event, "DoggyCreated", "error");
          });
        })
        .then(done)
        .catch(done);
    });
  }
  return { checkDoggyCreation };
};
