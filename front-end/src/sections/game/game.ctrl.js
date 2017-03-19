app.controller('GameController', ['$scope', function($scope) {

  $scope.title = 'Game';

  $scope.player1 = {name:"Pelaaja yksi", time:"5:00", player: true};
  $scope.player2 = {name:"Pelaaja kaksi", time:"5:00", player: false};
  $scope.player3 = {name:"Pelaaja kolme", time:"5:00", player: false};
  $scope.player4 = {name:"Pelaaja neljä", time:"5:00", player: false};

  createBoard("ground7", "white");
  createBoard("ground8", "black");

  function chessToDests(chess) {
    var dests = {};
    chess.SQUARES.forEach(function(s) {
      var ms = chess.moves({square: s, verbose: true});
      if (ms.length) dests[s] = ms.map(function(m) { return m.to; });
    });
    return dests;
  }

  function chessToColor(chess) {
    return (chess.turn() == "w") ? "white" : "black";
  }

  function createBoard(id, spin) {
    var board;
    var chess = new Chess();
    var onMove = function(orig, dest) {
      chess.move({from: orig, to: dest});
      ground.set({
        turnColor: chessToColor(chess),
        movable: {
          color: chessToColor(chess),
          dests: chessToDests(chess)
        }
      });
      console.log(id + chessToColor(chess));
      console.log(ground.getFen());
    };
    var ground = Chessground(document.getElementById(id), {
      viewOnly: false,
      turnColor: chessToColor(chess),
      orientation: spin,
      autoCastle: true,
      animation: {
        duration: 250
      },
      movable: {
        free: false,
        color: chessToColor(chess),
        premove: true,
        dests: chessToDests(chess),
        events: {
          after: onMove
        }
      },
      drawable: {
        enabled: true
      }
    });
    window.cg7 = ground;
  }
  
}]);
