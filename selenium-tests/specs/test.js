describe('Car Search', function() {

  it('uses Google maps\' autocomplete', function() {
    return client
      .url(URL)
      .setValue('.CarSearchPlaceInput > input', 'Amsterdam')

      // Check if autocomplete list is visible
      .isVisible('.pac-container');
  });
});

describe('Chai', function() {

  it('example of not equality', function() {
    expect(typeof true).to.be.not.equal('string');
  });

  it('example of equality', function() {
    expect(typeof true).to.be.equal('boolean');
  });
});
