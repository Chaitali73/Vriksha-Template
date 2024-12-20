// meta.js

// Define your meta title and description here
const metaTitle = "Godrej Vriksha: Luxury Living by Dwarka Expressway";
const metaDescription =
  "Explore Godrej Vriksha located in Sector 103, Gurugram, offering luxury living near Dwarka Expressway with top-notch amenities and excellent connectivity";

// Function to set meta tags
function setMetaTags() {
  document.title = metaTitle;

  // Set meta description
  let metaDescriptionTag = document.querySelector('meta[name="description"]');
  if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute("content", metaDescription);
  } else {
    metaDescriptionTag = document.createElement("meta");
    metaDescriptionTag.setAttribute("name", "description");
    metaDescriptionTag.setAttribute("content", metaDescription);
    document.head.appendChild(metaDescriptionTag);
  }
}

// Call the function to set meta tags
setMetaTags();
