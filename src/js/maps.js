export default class {
    constructor(ops) {
        this.map = new google.maps.Map(document.getElementById(ops.el), {
            zoom: ops.zoom,
            center: ops.center
        });

        ops.marker.map = this.map;
        this.marker = new google.maps.Marker(ops.marker);
    }
}
