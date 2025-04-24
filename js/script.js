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