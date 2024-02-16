document.addEventListener("DOMContentLoaded", function () {
  // Function to generate FAQ schema
  function generateFAQSchema() {
    let faqPairs = [];
    let faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      let question = item.querySelector(".faq-question").innerText.trim();
      let answer = item.querySelector(".faq-answer").innerText.trim();

      faqPairs.push({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      });
    });

    let faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqPairs,
    };

    let script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
  }

  // Call the function to generate and inject the FAQ schema
  generateFAQSchema();
});
