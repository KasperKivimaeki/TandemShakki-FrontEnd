#ifndef CHESSVARIABLES_HPP
#define CHESSVARIABLES_HPP

/* 
    This file is intended to only hold variables to make
    developing the bughouse server more easier.
*/

#define WK 0
#define WQ 1
#define WN 2
#define WR 3
#define WB 4
#define WP 5
#define BK 6
#define BQ 7
#define BN 8
#define BR 9
#define BB 10
#define BP 11
#define EMPTY 12

struct position
{ 
	int square[8][8];
	// Black officers
	square[0][0] = BR;
	square[0][1] = BN;
	square[0][2] = BB;
	square[0][3] = BQ;
	square[0][4] = BK;
	square[0][5] = BB;
	square[0][6] = BN;
	square[0][7] = BR;
	// White officers
	square[7][0] = WR;
	square[7][1] = WN;
	square[7][2] = WB;
	square[7][3] = WQ;
	square[7][4] = WK;
	square[7][5] = WB;
	square[7][6] = WN;
	square[7][7] = WR;
	// Black pawns
	square[1][0] = BP;
	square[1][1] = BP;
	square[1][2] = BP;
	square[1][3] = BP;
	square[1][4] = BP;
	square[1][5] = BP;
	square[1][6] = BP;
	square[1][7] = BP;
	// White pawns
	square[6][0] = WP;
	square[6][1] = WP;
	square[6][2] = WP;
	square[6][3] = WP;
	square[6][4] = WP;
	square[6][5] = WP;
	square[6][6] = WP;
	square[6][7] = WP;
	// Empty squares
	square[2][0] = EMPTY;
	square[2][1] = EMPTY;
	square[2][2] = EMPTY;
	square[2][3] = EMPTY;
	square[2][4] = EMPTY;
	square[2][5] = EMPTY;
	square[2][6] = EMPTY;
	square[2][7] = EMPTY;
	square[3][0] = EMPTY;
	square[3][1] = EMPTY;
	square[3][2] = EMPTY;
	square[3][3] = EMPTY;
	square[3][4] = EMPTY;
	square[3][5] = EMPTY;
	square[3][6] = EMPTY;
	square[3][7] = EMPTY;
	square[4][0] = EMPTY;
	square[4][1] = EMPTY;
	square[4][2] = EMPTY;
	square[4][3] = EMPTY;
	square[4][4] = EMPTY;
	square[4][5] = EMPTY;
	square[4][6] = EMPTY;
	square[4][7] = EMPTY;
	square[5][0] = EMPTY;
	square[5][1] = EMPTY;
	square[5][2] = EMPTY;
	square[5][3] = EMPTY;
	square[5][4] = EMPTY;
	square[5][5] = EMPTY;
	square[5][6] = EMPTY;
	square[5][7] = EMPTY;

	int halfTurns = 0;
};

#endif
