---
title:          "Domain knowledge-driven variational recurrent networks for drought monitoring"
date:           2024-01-01
selected:       true
pub:            "Remote Sensing of Environment"
pub_date:       "2024"
semantic_scholar_id: cec3367c0c071f560f37c60630f995a3119e94bd  # use this to retrieve citation count 
abstract: >-
  In the context of climate change, droughts, increasingly frequent and severe, necessitate effective monitoring. Existing methods, such as drought indices and data-driven models, face important limitations. Drought indices are built on prior expert knowledge but lack calibration based on actual drought events, while data-driven models prioritize goodness of fit over real event identification, undermining their credibility and generalization, and also struggling to generalize from regional to large-scale contexts. To address these challenges, here we introduce a hybrid machine learning framework for time series that combines domain knowledge and observational data in a variational recurrent neural network. The network models the joint distribution of total precipitation, air temperature, and real drought events, providing accurate predictions and uncertainty estimates. Extensive experiments focusing on a wide range of European drought events from 2011 to 2018 consistently show that our hybrid model surpasses both drought indices and data-driven models in terms of accuracy in drought detection, underlining its effectiveness, robustness, and stability. Our model achieves the best ROC-AUC (%) results in Afghanistan (79.7 ± 0.5), Italy (84.3 ± 0.6), Russia (89.4 ± 0.2), Europe-0 (84.3 ± 0.1), and Europe-1 (82.8 ± 0.4), effectively capturing the starting and ending times of drought events with lower uncertainty, and also generalizing better for unseen locations.
cover:          /assets/images/covers/rse_2024.png
authors:
- Mengxue Zhang*
- Miguel-Ángel Fernández-Torres
- Gustau Camps-Valls
links:
  Paper: /assets/images/papers/RSE2024_Paper.pdf
  Code: https://github.com/mengxue-rs/DK-VRN
  # Poster: /assets/images/posters/RSE2024_Poster.pdf
  # Slides: /assets/images/slides/RSE2024_Slides.pdf
---