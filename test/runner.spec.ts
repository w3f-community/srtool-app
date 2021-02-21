import { expect } from 'chai';
import 'mocha';
import Runner from '../src/lib/runner';

describe('runner', () => {
  it('should get workdir', async function () {
    const r = new Runner();    
    expect(r.settings.workDir).to.have.length.greaterThan(5);
  });
});
