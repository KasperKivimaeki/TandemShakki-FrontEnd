app.controller("bughouseBoardController", function($scope, $element) {

    createBoard($element[0].id, "white", true);

    function createBoard(id, spin, move) {
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
            console.log(ground.getFen());
        };
        ground = Chessground(document.getElementById(id), {
            viewOnly: move,
            turnColor: "white",
            orientation: spin,
            animation: {
                duration: 500
            },
            movable: {
                free: true,
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
});
