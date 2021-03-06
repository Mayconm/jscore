import { assert } from 'chai';
import { getScore, SCORE } from './setup/env';

// Model
import Score from '../src/model/Score';

describe('Score', function() {

  let score;

  beforeEach(() => {
    score = getScore();
  });

  // Testing Score instance
  it('instance', () => {
    assert.instanceOf(score, Score);
  });

});
