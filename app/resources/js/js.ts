

declare let particlesJS: any;
let end: any = new Date("12/25/2020 00:00 AM");

showRemaining();
let timer = setInterval(showRemaining, 1000);

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "shape": {
            "type": "image",
            "image": {
                "src": "starburst_white_300_drop_2.5fb7e55a.png",
                "width": 100,
                "height": 100
            },
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },

    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": false
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

function showRemaining() {

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer: any;

    let now: any = new Date();
    let distance = end - now;

    /* Christmas */
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<span style='color: rgb(216, 0, 255);text-shadow: 0 0 2px black;" +
            " font-size: 56px;'>Christmas, I guess...";
        return;
    }

    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);


    let minutes = Math.floor((distance % _hour) / _minute);


    let seconds = Math.floor((distance % _minute) / _second);

    if (minutes === 59 && seconds == 59) {
        document.getElementById("tree" + randomnmb()[0]).insertAdjacentHTML('afterend', '<span style="position:absolute;" id="tree' + randomnmb()[0] + '">' + randomnmb()[1] + "</span>");
    }
    if (seconds === 59) {
        document.getElementById("tree" + randomnmb()[0]).insertAdjacentHTML('afterend', '<span style="position:absolute;" id="tree' + randomnmb()[0] + '">' + randomnmb()[1] + "</span>");
        var div = document.getElementById("countdown");
        div.setAttribute("style", "color:" + randomColor() + "!important");
    }

    document.getElementById("timer-days").innerHTML = days + "<span> Days</span>";
    document.getElementById("timer-hours").innerHTML = hours + "<span> Hours</span>";
    document.getElementById("timer-minutes").innerHTML = minutes + "<span> Minutes</span>";
    document.getElementById("timer-seconds").innerHTML = seconds + "<span> Seconds</span>";

}


function randomnmb() {
    let emoji = ['🎅', '🧝‍♂️', '⛄', '🧦', '🔔', '🕯'];

    return [
        Math.floor(Math.random() * 16) + 1,
        emoji[Math.floor(Math.random() * emoji.length)]
    ];
}



function randomColor() {
    var cArr = '1234567890ABCDEF'.split('');
    var c = "#";

    for (var i = 0; i < 6; i++) {
        c += cArr[Math.floor(Math.random() * 16)]
    }

    return c;
}