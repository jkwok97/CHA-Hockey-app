import { shallow, mount, render } from 'enzyme';
import React from 'react';
import RulesPrizesComp from './RulesPrizesComp';

it('expect to render RulesPrizes component', () => {
    expect(shallow(<RulesPrizesComp />).length).toEqual(1);
})
