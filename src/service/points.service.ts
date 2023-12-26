import { RoundWinType } from '../model/round-win-type';

export const calculatePointsBasedOnWinType = (winType: RoundWinType): number => {
	switch (winType) {
		case RoundWinType.NORMAL:
			return -40;
		case RoundWinType.CLEAN:
			return -70;
		case RoundWinType.HAND:
			return -140;
		default:
			return 0;
	}
};