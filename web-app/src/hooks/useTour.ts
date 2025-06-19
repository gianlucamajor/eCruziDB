import { useState, useEffect } from "react";

export function useTour() {
  const [stepsEnabled, setStepsEnabled] = useState(false);

  useEffect(() => {
    // Only start the tour if it hasn't been shown before
    if (!localStorage.getItem("tourShown")) {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        setStepsEnabled(true);
        localStorage.setItem("tourShown", "true");
      }, 2000); // 2000ms delay, adjust as needed
    }
  }, []);

  const steps = [
    {
      element: '.workspace',
      intro: 'This is the main workspace area where you can view and interact with the epitope data table.',
    },
    {
      element: '.epitope-col-cell',
      intro: 'The "Epitope" column displays the amino acid sequences identified in the assay for each record.',
    },
    {
      element: '.peptides-col-cell',
      intro: 'Shows the number of peptides associated with each epitope. Click this link (🔗) to view the Multiple Sequence Alignment (MSA) for the peptides used to identify the epitope.',
    },
    {
      element: '.inserts-col-cell',
      intro: 'This column shows the number of inserts for each epitope.',
    },
    {
      element: '.genomic-regions-col-cell',
      intro: 'This column displays the number of genomic regions and allows you to explore their loci from this link: 🔗.',
    },
    {
      element: '#search-input',
      intro: 'Use this to search for specific epitopes or features.',
    },
  ];

  return {
    stepsEnabled,
    setStepsEnabled,
    steps,
  };
}