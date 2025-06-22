// Array of portfolio items data
const portfolioItems = [
    {
        title: "Autonomous Sorting",
        link: "https://drive.google.com/file/d/1bdDS9FM4vkTrmDcTJzaxJL4N4cIrrGly/view?usp=sharing",
        description:
            "Developed a path planning algorithm for a two wheeled robot, that can recognize and sort objects based on their colors, using the state-flow chart in MATLAB Simulink",
        languages: "Matlab, Simulink",
    },
    {
        title: "Multi-Object tracking in cluttered environmentsn",
        link: "https://github.com/jnanateja/Object-tracking-in-clutter.git",
        description:
            "Implemented and evaluated three object tracking algorithms—Global Nearest Neighbor (GNN), Joint Probabilistic Data Association (JPDA), and Track-Oriented Multiple Hypothesis Tracking (TOMHT)—to track multiple moving targets in cluttered environments. Developed custom measurement and motion models, and assessed performance using RMSE achieving the best accuracy.",
        languages: "Matlab",
    },
    {
        title: "Wearable Robotics and Sensors Project",
        link: "https://github.com/jnanateja/Wearable-Robotics-and-Sensors-Project.git",
        description:
            "Designed and implemented assistive controllers for a hip exoskeleton to reduce user effort during treadmill walking. Modeled the human motor control system, developed adaptive frequency oscillators, and validated a nonlinear filter to estimate real-time torque, resulting in a model-free assistive controller. Implemented Complementary Limb Motion Estimation (CLME) with a Kalman Filter to approximate hip joint variables from contralateral leg data.",
        languages: "Matlab, Simulink",
    },
    {
        title: "Mobile Robot Path Planning with Uncertainty",
        link: "https://github.com/jnanateja/Mobile-robot-State-estimation-under-uncertainty.git",
        description:
            "Developed a MATLAB-based project for mobile robot path planning and localization using the RRT algorithm and Kalman Filter. Generated and visualized paths based on shortest distance, minimum, and maximum uncertainty. Implemented a Particle Filter to compare its localization performance against the Kalman Filter. Enhanced accuracy through goal-based planning and the use of additional landmarks.",
        languages: "Matlab",
    },
    
];

// Function to create and populate portfolio items
function populatePortfolioItems() {
    const portfolioRow = document.getElementById("portfolioRow");

    portfolioItems.forEach((item) => {
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio_item");
        portfolioItem.innerHTML = `
            <div class="portfolio_item_inner shadow_dark">
              <a href="${item.link}" target="_blank">
                <span class="link"></span>
              </a>
              <h4 class="padd_15">${item.title}</h4>
              <p class="padd_15">${item.description}</p>
              <p class="padd_15">
                <br />
                <span>Programming Languages Used:</span> ${item.languages}
              </p>
            </div>
          `;
        portfolioRow.appendChild(portfolioItem);
    });
}

// Call the function to populate portfolio items
populatePortfolioItems();
