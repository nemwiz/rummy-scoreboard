import { describe } from 'vitest';
import { calculatePointsBasedOnWinType } from './points.service';
import { RoundWinType } from '../model/round-win-type';

describe('points.service', () => {
	it('calculates points based on win type', () => {
		expect(calculatePointsBasedOnWinType(RoundWinType.NORMAL)).toEqual(-40);
		expect(calculatePointsBasedOnWinType(RoundWinType.CLEAN)).toEqual(-70);
		expect(calculatePointsBasedOnWinType(RoundWinType.HAND)).toEqual(-140);
	});
});