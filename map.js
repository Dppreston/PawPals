const loggedIn = JSON.parse(localStorage.getItem("CurrentAccount"));
let menuUsername = document.querySelector(".menu-username");
const notLoggedIn = !loggedIn;
const profilePicture = document.querySelector(".profile-picture");
const pawIcon = document.getElementById("paw");

userInfo = JSON.parse(localStorage.getItem("localUser"));
const siteWideUsername = localStorage.getItem("Username");

if (notLoggedIn) {
  menuUsername.innerText = "login";
}

if (loggedIn) {
  //menu bar text
  menuUsername.innerText = siteWideUsername;
  //profile picture & name in top bar
  profilePicture.classList.remove("hidden");
  pawIcon.remove(pawIcon);
}

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuZXByZXN0b24iLCJhIjoiY2xnM3Vja2lqMGFsdjNkbDhtbmszOTd6dyJ9.jhcj4_kVMIca8BeQZCRjNw";
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-84.700115, 43.831309],
  zoom: 5,
});
map.addControl(
  new mapboxgl.GeolocateControl({
    showUserHeading: true,
  })
);

let parkArr = [
  {
    dpname: "Northern Tail Dog Park",
    address: "6400 Abbot Rd #1422, East Lansing, MI 48823",
  },

  {
    dpname: "Milford Dog Park",
    address: "Kensington Milford Trl, Milford, MI 48381",
  },

  {
    dpname: "Swift Run Dog Park",
    address: "4000 Platt Rd, Ann Arbor, MI 48108",
  },
  {
    dpname: "Adrian Dog Park",
    address: "E Albert St, Adrian, MI 49221",
  },
  {
    dpname: "Betty's Dog Park",
    address: "406 N Blackstone St, Jackson, MI 49201",
  },
  {
    dpname: "Home Run Dog Park",
    address: "800 E Roosevelt Ave, Battle Creek, MI 49017",
  },
  {
    dpname: "Old Depot Dog Park",
    address: "217-1085 W Main St, Sturgis, MI 49091",
  },

  {
    dpname: "Sutherland Park",
    address: "251 Mills St, Kalamazoo, MI 49001",
  },
  {
    dpname: "St. Joseph Dog Park",
    address: "1350 Pearl St, Benton Harbor, MI 49022",
  },
  {
    dpname: "Covell Dog Park",
    address: "526 Covell Ave NW, Grand Rapids, MI 49504",
  },
  {
    dpname: "Lathrup Park",
    address: "4100 Monterey Ave, Saginaw, MI 48638",
  },
  {
    dpname: "Sunnyside Park",
    address: "1511 Elm St, Mt Pleasant, MI 48858",
  },

  {
    dpname: "Sterns Park",
    address: "420 N Lakeshore Dr, Ludington, MI 49431",
  },
  {
    dpname: "Clinch Park",
    address: "111 E Grandview Pkwy, Traverse City, MI 49684",
  },
  {
    dpname: "Aspen Park",
    address: "Commerce Blvd, Gaylord, MI 49735",
  },
];

const park1 = new mapboxgl.Marker()
  .setLngLat([-84.479205, 42.768334])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[0].dpname}</h1> <p>${parkArr[0].address}</p>`
    )
  )
  .addTo(map);

const park2 = new mapboxgl.Marker()
  .setLngLat([-83.61262, 42.583092])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[1].dpname}</h1> <p>${parkArr[1].address}</p>`
    )
  )
  .addTo(map);
const park3 = new mapboxgl.Marker()
  .setLngLat([-83.700821, 42.228607])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[2].dpname}</h1> <p>${parkArr[2].address}</p>`
    )
  )
  .addTo(map);
const park4 = new mapboxgl.Marker()
  .setLngLat([-84.029346, 41.908209])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[3].dpname}</h1> <p>${parkArr[3].address}</p>`
    )
  )
  .addTo(map);
const park5 = new mapboxgl.Marker()
  .setLngLat([-84.412262, 42.25058])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[4].dpname}</h1> <p>${parkArr[4].address}</p>`
    )
  )
  .addTo(map);
const park6 = new mapboxgl.Marker()
  .setLngLat([-85.152639, 42.337144])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[5].dpname}</h1> <p>${parkArr[5].address}</p>`
    )
  )
  .addTo(map);
const park7 = new mapboxgl.Marker()
  .setLngLat([-85.421198, 41.804302])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[6].dpname}</h1> <p>${parkArr[6].address}</p>`
    )
  )
  .addTo(map);

const park8 = new mapboxgl.Marker()
  .setLngLat([-85.563177, 42.290157])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[7].dpname}</h1> <p>${parkArr[7].address}</p>`
    )
  )
  .addTo(map);

const park9 = new mapboxgl.Marker()
  .setLngLat([-86.477991, 42.101958])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[8].dpname}</h1> <p>${parkArr[8].address}</p>`
    )
  )
  .addTo(map);

const park10 = new mapboxgl.Marker()
  .setLngLat([-85.7159, 42.973006])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[9].dpname}</h1> <p>${parkArr[9].address}</p>`
    )
  )
  .addTo(map);
const park11 = new mapboxgl.Marker()
  .setLngLat([-83.997076, 43.429771])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[10].dpname}</h1> <p>${parkArr[10].address}</p>`
    )
  )
  .addTo(map);
const park12 = new mapboxgl.Marker()
  .setLngLat([-84.795697, 43.606521])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[11].dpname}</h1> <p>${parkArr[11].address}</p>`
    )
  )
  .addTo(map);
const park13 = new mapboxgl.Marker()
  .setLngLat([-86.45969, 43.959418])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[12].dpname}</h1> <p>${parkArr[12].address}</p>`
    )
  )
  .addTo(map);
const park14 = new mapboxgl.Marker()
  .setLngLat([-85.621239, 44.765643])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[13].dpname}</h1> <p>${parkArr[13].address}</p>`
    )
  )
  .addTo(map);
const park15 = new mapboxgl.Marker()
  .setLngLat([-84.666414, 45.01188])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      `<h1>${parkArr[14].dpname}</h1> <p>${parkArr[14].address}</p>`
    )
  )
  .addTo(map);
