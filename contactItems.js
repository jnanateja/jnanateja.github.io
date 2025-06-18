// Array of contact items data
const contactItems = [
    {
        iconClass: "fa fa-envelope",
        title: "Email me at:",
        emails: [
            {
                email: "jnanateja.pasagadugula@gmail.com",
                link: "jnanateja.pasagadugula@gmail.com",
            },
        ],
    },
    {
        iconClass: "fa fa-brands fa-linkedin",
        title: "LinkedIn:",
        link: "https://www.linkedin.com/in/jnana-teja-pasagadugula",
    },
    {
        iconClass: "fa fa-brands fa-github",
        title: "GitHub:",
        link: "http://www.github.com/jnanateja",
    },
];

// Function to create and populate contact items
function populateContactItems() {
    const contactRow = document.getElementById("contactRow");

    const contactHTML = contactItems
        .map((item) => {
            if (item.emails) {
                const emailsHTML = item.emails
                    .map(
                        (emailObj) => `
          <p><a href="${emailObj.link}">${emailObj.email}</a></p>
        `
                    )
                    .join("");
                return `
          <div class="contact_item padd_15">
            <div class="contact_item_inner shadow_dark">
              <div class="icon"><i class="${item.iconClass}"></i></div>
              <h4>${item.title}</h4>
              ${emailsHTML}
            </div>
          </div>
        `;
            } else {
                return `
          <div class="contact_item padd_15 flex_100">
            <div class="contact_item_inner shadow_dark">
              <div class="icon"><i class="${item.iconClass}"></i></div>
              <h4><a href="${item.link}" target="_blank">${item.title
                    }</a></h4>
              ${item.link
                        ? `<p><a href="${item.link}" target="_blank">${item.link}</a></p>`
                        : ""
                    }
            </div>
          </div>
        `;
            }
        })
        .join("");

    contactRow.innerHTML = contactHTML;
}

// Call the function to populate contact items
populateContactItems();