const findDifference = (a, b) => Math.abs((a.reduce((sum, current) => sum * current, 1)) - (b.reduce((sum, current) => sum * current, 1)));
