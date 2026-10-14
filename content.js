/* Edit research and people here. Set showOnWebsite to false until facts are public and verified. */
window.CLIP_CONTENT = {
  researchAreas: [
    {
      title: "Natural Language Processing",
      description: "How models represent language, understand text, and respond to linguistic variation, particularly in Bengali and other low-resource languages."
    },
    {
      title: "Multimodal AI & Vision-Language Models",
      description: "How text and images can be aligned and reasoned over together, from visual question answering to understanding documents."
    },
    {
      title: "Small and Efficient Language Models",
      description: "Compact models and data-efficient training methods that can be studied and used when compute and training data are limited."
    },
    {
      title: "Low-Resource Language Technologies",
      description: "Language tools and benchmarks for communities with less available training data, with a particular interest in Bengali."
    },
    {
      title: "Model Pretraining, Fine-tuning & Benchmarking",
      description: "Controlled comparisons of training objectives, adaptation strategies, distillation, and evaluation methods."
    }
  ],
  publications: [
    {
      title: "Dense Supervision, Gentle Decay: Curriculum-Guided Rebalancing of ELECTRA-Style RTD and MLM for Small-Data Pretraining",
      authors: "Aftab Hossain Mikat and Tamjid Hasan Fahim",
      venue: "BabyLM Workshop, EMNLP 2026",
      year: 2026,
      status: "Accepted workshop paper",
      description: "A study of training objectives for compact Bengali encoders under a strict data budget, including when to reduce dense RTD supervision during training.",
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
      description: "An analysis of document-grounded quantitative reasoning that traces many errors to visual evidence extraction and localization before calculation begins.",
      paperUrl: "assets/papers/DocSem_Document_Grounded_Reasoning_Preprint.pdf",
      codeUrl: null,
      projectUrl: null,
      showOnWebsite: true
    }
  ],
  submissions: [
    {
      title: "Bangla MMMU research — verify public manuscript title",
      authors: null,
      venue: null,
      year: null,
      status: null,
      description: null,
      paperUrl: null,
      codeUrl: null,
      projectUrl: null,
      showOnWebsite: false
    }
  ],
  projects: [
    {
      title: "BanglaCLIP",
      status: "Ongoing research",
      description: "Exploring Bengali image-text alignment using language and vision encoders, contrastive learning, and cross-modal evaluation.",
      projectUrl: null,
      showOnWebsite: true
    },
    {
      title: "Bangla News Scene Understanding",
      status: "Ongoing research",
      description: "Investigating scene understanding, visual evidence, and embedded text in Bengali news images, beyond questions centered only on faces.",
      projectUrl: null,
      showOnWebsite: true
    }
  ],
  people: [
    {
      name: "Aftab Hossain Mikat",
      initials: "AM",
      affiliation: "CSE undergraduate · RUET, Bangladesh",
      bio: "Aftab studies natural language processing, compact language models, multimodal AI, low-resource language technologies, and model evaluation.",
      links: [
        { label: "Website", url: "https://ahmikat.github.io/" },
        { label: "GitHub", url: "https://github.com/ahmikat" },
        { label: "CV", url: "https://ahmikat.github.io/assets/Aftab_Hossain_Mikat_CV.pdf" }
      ],
      showOnWebsite: true
    },
    {
      name: "Tamjid Hasan Fahim",
      initials: "TF",
      affiliation: "CSE undergraduate · RUET, Bangladesh",
      bio: "Tamjid works on multimodal AI, data-efficient learning, faithful reasoning, and adaptation of pretrained models to specialized domains.",
      links: [
        { label: "Website", url: "https://tamjid.me/" },
        { label: "GitHub", url: "https://github.com/heytamjid" },
        { label: "CV", url: "https://drive.google.com/file/d/1QAq8YuHKdhdORI5y49CtP6ro69B9hEdN/view?usp=sharing" }
      ],
      showOnWebsite: true
    }
  ]
};
