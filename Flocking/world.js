function World() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d'); // This is the context
    this.vehicles = [];
    this.loadVehicles(111);
    // setup 6 sliders
    let updateSlider = function (e) {    // update event handler
        e.target.display.textContent = e.target.value;
    }


    for (i = 1; i <= 5; i++) {    // for six sliders
        // use bracket notation to access slider properties of 'this'
        let sliderId = "slider" + i;    // "slider1", "slider2", etc
        let slider = this[sliderId] = document.getElementById(sliderId);
        // each slider has a text field to display its value
        slider.display = document.getElementById('s' + i + 'value'); // "s1value", "s2value", etc
        slider.display.textContent = slider.value;  // display its current value
        // add event handler to update display
        slider.addEventListener('input', updateSlider);  // update display value when it changes
    }
} //++++++++++++++++++++++  end World

// function to run the World each animation cycle
World.prototype.run = function () {
    for (let v = 0; v < this.vehicles.length; v++) {
        this.vehicles[v].run(this.vehicles);
    }
}

World.prototype.loadVehicles = function (n) {
    for (let v = 0; v < n; v++) {
        let x = Math.floor(Math.random() * this.canvas.width);
        let y = Math.floor(Math.random() * this.canvas.height);
        let loc = new JSVector(x, y);
        this.vehicles.push(new Vehicle(loc));
    }
}


