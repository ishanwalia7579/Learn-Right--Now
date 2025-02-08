function initMap() {
    var location = { lat: 31.7081, lng: 76.9326 }; // Example coordinates for Mandi, Himachal Pradesh
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Learn-Right-Now Location"
    });
}