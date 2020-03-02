import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  if (variables.name == null) variables.name = "Nombre";
  if (variables.lastname == null) variables.lastname = "Apellido";
  if (variables.twitter == null) variables.twitter = "xilenox";
  if (variables.github == "xilen0x") variables.github = "xilen0x";
  if (variables.linkedin == null) variables.linkedin = "in/carlos-astorga/";
  if (variables.instagram == null) variables.instagram = "carlo.storga";
  if (variables.socialMediaPosition == null)
    variables.socialMediaPosition = "position-right";
  if (variables.role == null) variables.role = "Web Developer";
  if (variables.city == null) variables.city = "Miami, USA";
  if (variables.country == null) variables.country = "";
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}</h3>
          <h3>${variables.country}</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a target="_blank" href="https://twitter.com/${
              variables.twitter
            }"><i class="fa fa-twitter"></i></a></li>
            <li><a target="_blank"href="https://github.com/${
              variables.github
            }"><i class="fa fa-github"></i></a></li>
            <li><a target="_blank"href="https://linkedin.com/${
              variables.linkedin
            }"><i class="fa fa-linkedin"></i></a></li>
            <li><a target="_blank"href="https://instagram.com/${
              variables.instagram
            }"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://images.unsplash.com/photo-1583132899463-28ba57170fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "right",
    // social media usernames
    twitter: null,
    github: "xilen0x",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
