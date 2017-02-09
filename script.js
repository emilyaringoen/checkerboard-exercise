// Your JS goes here
document.addEventListener("DOMContentLoaded", function() {


    var body = document.getElementsByTagName('body')[0];
    //

    function randomColor() {
        var values = [];
        for (var k = 0; k < 3; k++) {
            var num = Math.floor(Math.random() * 255)
            values.push(num + "");
        }
        var rgbValue = ("rgb(" + values[0] + "," + values[1]+ "," + values[2] + ")");
        return rgbValue
    }

    function traditional() {
        for (var i = 0; i < 7; i++) {
            var row = document.createElement('div')
            row.style.lineHeight = 0

            for (var j = 0; j < 9; j++) {
                var square = document.createElement('div')
                row.appendChild(square)
                square.style.height = '100px'
                square.style.width = '100px'
                square.style.display = 'inline-block'
                square.setAttribute('class', 'egg')
                if (i % 2) {
                    if (j % 2) {
                        square.style.backgroundColor = "red"
                    } else {
                        square.style.backgroundColor = 'black'
                    }
                } else {
                    if (j % 2) {
                        square.style.backgroundColor = "black"
                    } else {
                        square.style.backgroundColor = "red"
                    }
                }
            }
            body.appendChild(row)

        }
    }

    traditional()

    var random = function() {
        var squares = document.getElementsByTagName('div');

        for (var i = 0; i < squares.length; i++) {
            if (squares[i].classList.contains('egg')) {
                squares[i].style.backgroundColor = randomColor();
            }
        }
    };
    
    body.addEventListener("keypress", random)

});
