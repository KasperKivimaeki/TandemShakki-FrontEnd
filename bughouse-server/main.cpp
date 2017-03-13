#include "communication.hpp"
#include "bughouseThread.hpp"
#include <iostream>
#include <thread>
#include <vector>
#include <string>

using std::string;

int MAXIMUMGAMES = 512;

void gameThread() {
    std::cout << "Thread created\n";
}


int main() {
    /* 
        Open 512 threads that will wait for chess player names and moves.
        If a game ends then remove thread and create new ones until 512.
        If a command tells to stop creating games then program stops after
        reaching 0 games.

        Constantly listen for connections and accept those from PHP application.
        Move PHP connections to separate threads.
    */

    // Create threads
    std::vector<std::thread> games;
    for (int i = 0; i < MAXIMUMGAMES; ++i) {
        games.push_back(std::thread(gameThread));
    }

    while(1) {
        // Read input until "STOP"
        string userCall;
        std::cin >> userCall;

        std::size_t found = userCall.rfind("STOP");
        if(found != string::npos) break;
    }

    // Join threads
    for (int i = 0; i < MAXIMUMGAMES; ++i) {
        games[i].join();
    }

}

