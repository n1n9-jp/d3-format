var tape = require("tape"),
    format = require("../");

tape("format(specifier)(number) returns a string", function(test) {
  test.equal(typeof format.format("d")(0), "string");
  test.end();
});

tape("format(specifier) throws an error for invalid formats", function(test) {
  test.throws(function() { format.format("foo"); }, /invalid format: foo/);
  test.throws(function() { format.format(".-2s"); }, /invalid format: \.-2s/);
  test.throws(function() { format.format(".f"); }, /invalid format: \.f/);
  test.end();
});

tape("format(\",.\") unreasonable precision values are clamped to reasonable values", function(test) {
  test.equal(format.format(".30f")(0), "0.00000000000000000000");
  test.equal(format.format(".0g")(1), "1");
  test.end();
});
