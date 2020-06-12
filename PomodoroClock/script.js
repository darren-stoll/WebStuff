"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived),
            result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function() {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Timer = /*#__PURE__*/ function(_React$Component) {
    _inherits(Timer, _React$Component);

    var _super = _createSuper(Timer);

    function Timer() {
        _classCallCheck(this, Timer);

        return _super.apply(this, arguments);
    }

    _createClass(Timer, [{
        key: "render",
        value: function render() {
            var timeMin = parseInt(this.props.timeMin, 10);
            timeMin = timeMin < 10 ? "0" + timeMin : timeMin;
            var timeSec = parseInt(this.props.timeSec, 10);
            timeSec = timeSec < 10 ? "0" + timeSec : timeSec;
            return /*#__PURE__*/ React.createElement("div", {
                id: "timer-wrapper"
            }, /*#__PURE__*/ React.createElement("div", {
                id: "timer-label"
            }, this.props.toggleSessionOn ? "Session" : "Break"), /*#__PURE__*/ React.createElement("div", {
                id: "time-left"
            }, timeMin + ":" + timeSec), /*#__PURE__*/ React.createElement("button", {
                id: "start_stop",
                onClick: this.props.handleStartStop
            }, "Start/Stop Timer"), /*#__PURE__*/ React.createElement("button", {
                id: "reset",
                onClick: this.props.handleReset
            }, "Reset"));
        }
    }]);

    return Timer;
}(React.Component);

var Session = /*#__PURE__*/ function(_React$Component2) {
    _inherits(Session, _React$Component2);

    var _super2 = _createSuper(Session);

    function Session() {
        _classCallCheck(this, Session);

        return _super2.apply(this, arguments);
    }

    _createClass(Session, [{
        key: "render",
        value: function render() {
            return /*#__PURE__*/ React.createElement("div", {
                id: "session-wrapper"
            }, /*#__PURE__*/ React.createElement("div", {
                id: "session-length"
            }, this.props.sessionLength), /*#__PURE__*/ React.createElement("div", {
                id: "session-arrows"
            }, /*#__PURE__*/ React.createElement("a", {
                id: "session-decrement",
                href: "#",
                onClick: this.props.sessionDecrement
            }, /*#__PURE__*/ React.createElement("i", {
                className: "arrow down"
            })), /*#__PURE__*/ React.createElement("a", {
                id: "session-increment",
                href: "#",
                onClick: this.props.sessionIncrement
            }, /*#__PURE__*/ React.createElement("i", {
                className: "arrow up"
            }))), /*#__PURE__*/ React.createElement("div", {
                id: "session-label"
            }, "Session Length"));
        }
    }]);

    return Session;
}(React.Component);

var Break = /*#__PURE__*/ function(_React$Component3) {
    _inherits(Break, _React$Component3);

    var _super3 = _createSuper(Break);

    function Break() {
        _classCallCheck(this, Break);

        return _super3.apply(this, arguments);
    }

    _createClass(Break, [{
        key: "render",
        value: function render() {
            return /*#__PURE__*/ React.createElement("div", {
                id: "break-wrapper"
            }, /*#__PURE__*/ React.createElement("div", {
                id: "break-length"
            }, this.props.breakLength), /*#__PURE__*/ React.createElement("div", {
                id: "break-arrows"
            }, /*#__PURE__*/ React.createElement("a", {
                id: "break-decrement",
                href: "#",
                onClick: this.props.breakDecrement
            }, /*#__PURE__*/ React.createElement("i", {
                className: "arrow down"
            })), /*#__PURE__*/ React.createElement("a", {
                id: "break-increment",
                href: "#",
                onClick: this.props.breakIncrement
            }, /*#__PURE__*/ React.createElement("i", {
                className: "arrow up"
            }))), /*#__PURE__*/ React.createElement("div", {
                id: "break-label"
            }, "Break Length"));
        }
    }]);

    return Break;
}(React.Component);
/* Needed help from https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    display.text(minutes + ":" + seconds);
    
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

jQuery(function ($) {
  var fiveMinutes = 60 * 5, 
      display = $('#time');
  startTimer(fiveMinutes, display);
});

End help from stackoverflow */
//Set up interval globally so that it can be used for setInterval and clearInterval


var myInterval;

var PomodoroClock = /*#__PURE__*/ function(_React$Component4) {
    _inherits(PomodoroClock, _React$Component4);

    var _super4 = _createSuper(PomodoroClock);

    function PomodoroClock(props) {
        var _this;

        _classCallCheck(this, PomodoroClock);

        _this = _super4.call(this, props);
        _this.state = {
            timer: 1500,
            timerEnabled: false,
            sessionLength: 25,
            breakLength: 5,
            toggleSessionOn: true
        };
        _this.handleStartStop = _this.handleStartStop.bind(_assertThisInitialized(_this));
        _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_this));
        _this.sessionDecrement = _this.sessionDecrement.bind(_assertThisInitialized(_this));
        _this.sessionIncrement = _this.sessionIncrement.bind(_assertThisInitialized(_this));
        _this.breakDecrement = _this.breakDecrement.bind(_assertThisInitialized(_this));
        _this.breakIncrement = _this.breakIncrement.bind(_assertThisInitialized(_this));
        return _this;
    }

    _createClass(PomodoroClock, [{
        key: "handleStartStop",
        value: function handleStartStop() {
            var _this2 = this;

            if (!this.state.timerEnabled) {
                this.setState({
                    timerEnabled: true
                });

                var timer = function timer() {
                    if (_this2.state.timer > 0) {
                        _this2.setState({
                            timer: _this2.state.timer -= 1
                        });
                    } else {
                        if (_this2.state.toggleSessionOn) {
                            _this2.setState({
                                toggleSessionOn: false,
                                timer: _this2.state.breakLength * 60
                            });
                        } else {
                            _this2.setState({
                                toggleSessionOn: true,
                                timer: _this2.state.sessionLength * 60
                            });
                        }
                    }
                };

                myInterval = setInterval(timer, 1000);
            } else {
                this.setState({
                    timerEnabled: false
                });
                clearInterval(myInterval);
            }
        }
    }, {
        key: "handleReset",
        value: function handleReset() {
            var _this$setState;

            var baseTime = this.state.sessionLength * 60;
            this.setState((_this$setState = {
                timer: baseTime,
                timerEnabled: false,
                sessionLength: 25,
                breakLength: 5
            }, _defineProperty(_this$setState, "timer", 1500), _defineProperty(_this$setState, "toggleSessionOn", true), _this$setState));
            clearInterval(myInterval);
        }
    }, {
        key: "sessionDecrement",
        value: function sessionDecrement() {
            var current = this.state.sessionLength;

            if (current > 1 && current <= 60) {
                current = current - 1;
                this.setState({
                    sessionLength: current,
                    timer: current * 60,
                    timerEnabled: false,
                    toggleSessionOn: true
                });
                clearInterval(myInterval);
            }
        }
    }, {
        key: "sessionIncrement",
        value: function sessionIncrement() {
            var current = this.state.sessionLength;

            if (current > 0 && current < 60) {
                current = current + 1;
                this.setState({
                    sessionLength: current,
                    timer: current * 60,
                    timerEnabled: false,
                    toggleSessionOn: true
                });
                clearInterval(myInterval);
            }
        }
    }, {
        key: "breakDecrement",
        value: function breakDecrement() {
            var current = this.state.breakLength;

            if (current > 1 && current <= 60) {
                current = current - 1;
                this.setState({
                    breakLength: current,
                    timer: this.state.sessionLength * 60,
                    timerEnabled: false,
                    toggleSessionOn: true
                });
                clearInterval(myInterval);
            }
        }
    }, {
        key: "breakIncrement",
        value: function breakIncrement() {
            var current = this.state.breakLength;

            if (current > 0 && current < 60) {
                current = current + 1;
                this.setState({
                    breakLength: current,
                    timer: this.state.sessionLength * 60,
                    timerEnabled: false,
                    toggleSessionOn: true
                });
                clearInterval(myInterval);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var timeMin = this.state.timer / 60;
            var timeSec = this.state.timer % 60;
            return /*#__PURE__*/ React.createElement("div", {
                id: "clock"
            }, /*#__PURE__*/ React.createElement(Timer, {
                toggleSessionOn: this.state.toggleSessionOn,
                totalTime: this.state.timer,
                timeMin: timeMin,
                timeSec: timeSec,
                handleStartStop: this.handleStartStop,
                handleReset: this.handleReset
            }), /*#__PURE__*/ React.createElement("div", {
                id: "counters"
            }, /*#__PURE__*/ React.createElement(Break, {
                breakLength: this.state.breakLength,
                breakDecrement: this.breakDecrement,
                breakIncrement: this.breakIncrement
            }), /*#__PURE__*/ React.createElement(Session, {
                sessionLength: this.state.sessionLength,
                sessionDecrement: this.sessionDecrement,
                sessionIncrement: this.sessionIncrement
            })), /*#__PURE__*/ React.createElement("audio", {
                id: "beep",
                src: "https://goo.gl/65cBl1",
                ref: function ref(audio) {
                    _this3.audioBeep = audio;
                }
            }));
        }
    }]);

    return PomodoroClock;
}(React.Component);

ReactDOM.render( /*#__PURE__*/ React.createElement(PomodoroClock, null), document.getElementById("main"));