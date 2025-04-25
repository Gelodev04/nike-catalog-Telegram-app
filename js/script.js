const navItems = document.querySelectorAll("ul li a");

navItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // prevents link navigation

    // Remove active styles from all
    navItems.forEach(link => {
      link.classList.remove("text-[#EF5601]", "border-b-2", "border-[#EF5601]", "font-semibold");
      link.classList.add("text-[#00000059]");
    });

    // Add active styles to clicked item
    item.classList.remove("text-[#00000059]");
    item.classList.add("text-[#EF5601]", "border-b-2", "border-[#EF5601]", "font-semibold");
  });
});

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia & Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
  "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China",
  "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
  "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania",
  "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Singapore", "Slovakia", "Slovenia",
  "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname",
  "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
  "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const select = document.getElementById("country");
select.innerHTML = '<option value="">🌍Select a country</option>';

countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  select.appendChild(option);
});

document.addEventListener('DOMContentLoaded', () => {
  const brandItems = document.querySelectorAll('#brandList li');

  brandItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      brandItems.forEach(brand => {
        brand.classList.remove('text-[#EF5601]', 'font-semibold', 'active-brand');
      });

      // Add active class to clicked item
      item.classList.add('text-[#EF5601]', 'font-semibold', 'active-brand');
    });
  });
});