require('should');

const { it, describe } = require('mocha');
const { promisify } = require('util');

const markdownlint = require('markdownlint');

const markdownlintConfig = require('../../markdownlint');

const mdlint = promisify(markdownlint);

const options = {
  config: markdownlintConfig,
};

describe('Markdown linter', () => {
  it('should lint markdown files', async () => {
    const testFile = {
      strings: {
        content: 'Some Markdown to lint.',
      },
    };

    const result = await mdlint({ ...options, ...testFile });

    result.constructor.name.should.be.equal('Results');
  });

  it('should not accept line that exceed 120 chars', async () => {
    const md = `${__dirname}/fixtures/line-length.md`;
    const testFile = {
      files: [md],
    };

    const result = await mdlint({ ...options, ...testFile });

    result[md].should.not.be.empty();
    result[md][0].ruleNames[1].should.be.equal('line-length');
  });
});
