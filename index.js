// Function to generate FAQ schema
function generateFAQSchema() {
  // Array to hold each question and answer pair
  let faqPairs = [];

  // Select all FAQ items
  let faqItems = document.querySelectorAll(".faq-item");

  // Loop over each FAQ item to get the question and answer text
  faqItems.forEach((item) => {
    let question = item.querySelector(".faq-question").innerText.trim();
    let answer = item.querySelector(".faq-answer").innerText.trim();

    // Add the question and answer pair to the array
    faqPairs.push({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    });
  });

  // Define the FAQ schema structure
  let faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPairs,
  };

  // Create a script tag to insert the JSON-LD into the head of the document
  let script = document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(faqSchema);

  // Append the script tag to the head of the document
  document.head.appendChild(script);
}

// Call the function to generate and inject the FAQ schema
generateFAQSchema();
