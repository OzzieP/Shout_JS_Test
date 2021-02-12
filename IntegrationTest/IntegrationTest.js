function sendToApiConst() {
  return true;
}

QUnit.module('sendToApiConst',function() {
  QUnit.test('function', function(assert) {
    assert.equal(false, true, true)
  });
});