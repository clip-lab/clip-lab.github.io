/* Edit research, publications, projects, and people here. */
window.CLIP_CONTENT = {
  researchAreas: [
    {
      title: "Natural Language Processing",
      description: "Language modeling and evaluation for Bengali and other low-resource languages."
    },
    {
      title: "Multimodal AI & Vision-Language Models",
      description: "Connecting text and images for visual question answering and document understanding."
    },
    {
      title: "Small and Efficient Language Models",
      description: "Data-efficient training and compact models under limited compute."
    },
    {
      title: "Low-Resource Language Technologies",
      description: "Tools and benchmarks for languages with limited training data."
    },
    {
      title: "Model Pretraining, Fine-tuning & Benchmarking",
      description: "Controlled comparisons of training objectives, adaptation, and evaluation."
    }
  ],
  publications: [
    {
      title: "Dense Supervision, Gentle Decay: Curriculum-Guided Rebalancing of ELECTRA-Style RTD and MLM for Small-Data Pretraining",
      authors: "Aftab Hossain Mikat and Tamjid Hasan Fahim",
      venue: "BabyLM Workshop, EMNLP 2026",
      year: 2026,
      status: "Accepted workshop paper",
      description: "Curriculum-guided RTD–MLM training for compact Bengali encoders under a strict data budget.",
      paperUrl: "assets/papers/BabyLM_Dense_Supervision_Gentle_Decay_Preprint.pdf",
      codeUrl: null,
      projectUrl: null,
      showOnWebsite: true
    },
    {
      title: "When the Evidence Is Right, the Math Is Easy: Understanding the Challenges of Document-Grounded Reasoning",
      authors: "Aftab Hossain Mikat and Tamjid Hasan Fahim",
      venue: "DocInsights Workshop, EMNLP 2026 · DocSem Shared Task",
      year: 2026,
      status: "Accepted workshop paper · Poster selected",
      description: "Analysis of visual evidence extraction in document-grounded quantitative reasoning.",
      paperUrl: "assets/papers/DocSem_Document_Grounded_Reasoning_Preprint.pdf",
      codeUrl: null,
      projectUrl: null,
      showOnWebsite: true
    }
  ],
  projects: [
    {
      title: "Vision-Language Alignment in Low-Resource Languages",
      status: "Ongoing research",
      description: "Exploring image-text alignment for Bengali and other low-resource languages.",
      projectUrl: null,
      showOnWebsite: true
    },
    {
      title: "Bangla News Scene Understanding",
      status: "Ongoing research",
      description: "Investigating scene understanding, visual evidence, and embedded text in Bengali news images, beyond questions centered only on faces.",
      projectUrl: null,
      showOnWebsite: true
    },
    {
      title: "Document Reasoning Benchmark",
      status: "Ongoing research",
      description: "Developing evaluation tasks for document evidence retrieval and quantitative reasoning.",
      projectUrl: null,
      showOnWebsite: true
    }
  ],
  people: [
    {
      name: "Tamjid Hasan Fahim",
      initials: "TF",
      affiliation: "CSE undergraduate · RUET, Bangladesh",
      bio: "Multimodal AI, data-efficient learning, and faithful reasoning.",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/tamjid-hasan-fahim/" },
        { label: "Website", url: "https://tamjid.me/" }
      ],
      showOnWebsite: true
    },
    {
      name: "Aftab Hossain Mikat",
      initials: "AM",
      affiliation: "CSE undergraduate · RUET, Bangladesh",
      bio: "Bengali NLP, efficient language models, multimodal AI, and model evaluation.",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/aftab-hossain-mikat" },
        { label: "Website", url: "https://ahmikat.github.io/" }
      ],
      showOnWebsite: true
    }
  ]
};
