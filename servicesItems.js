// Array of service items data
const serviceItems = [
    {
        iconClass: "fa fa-mobile-alt",
        title: "Robotics engineering",
    },
    {
        iconClass: "fa fa-code",
        title: "MATLAB",
    },
    {
        iconClass: "fa fa-laptop-code",
        title: "ROS",
    },
    {
        iconClass: "fa fa-solid fa-keyboard",
        title: "Technical Content Writer",
    },
    {
        iconClass: "fa fa-solid fa-camera-retro",
        title: "Photography",
    },
    {
        iconClass: "fa fa-palette",
        title: "CAD designing",
    },
];
// Function to create and populate service items
function populateServiceItems() {
    const servicesRow = document.getElementById("servicesRow");

    const serviceHTML = serviceItems
        .map(
            (item) => `
      <div class="service_item padd_15">
        <div class="service_item_inner">
          <div class="icon">
            <i class="${item.iconClass}"></i>
          </div>
          <h4>${item.title}</h4>
        </div>
      </div>
    `
        )
        .join("");

    servicesRow.innerHTML = serviceHTML;
}

// Call the function to populate service items
populateServiceItems();
