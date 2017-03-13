#ifndef BUGHOUSETHREAD_HPP
#define BUGHOUSETHREAD_HPP

#include "chessVariables.hpp"

struct bughouseGame{
	long gameId;
	position game1;
	position game2;
	time_t game1whiteTime = ;
	time_t game2whiteTime;
	time_t game1blackTime;
	time_t game1blackTime;
};

int isPositionLegal(int sideToPlay, position game);

int isCheck(position game);

#endif
