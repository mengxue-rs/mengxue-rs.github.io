---
layout: blog_post
title: 'The AIDE Toolbox: Artificial Intelligence for Disentangling Extremes'
date: 2025-07-01
tags:
  - Toolbox
  - Extreme Events
  - Deep Learning
  - Explainable AI
---

# 1. Overview of the AIDE Toolbox

The AIDE toolbox is built to address the unique complexities of detecting irregular patterns and extreme behaviors within the Earth system. It provides a comprehensive suite of advanced machine learning (ML) models—ranging from classical statistics to deep learning (DL) architectures—capable of yielding spatiotemporal explicit monitoring maps with probabilistic estimates. 

The toolbox is open-source and freely available at [GitHub: IPL-UV/AIDE](https://github.com/IPL-UV/AIDE), intended to bridge the gap between domain experts (scientists, engineers, and students) and the latest developments in computer science.

### Key Capabilities
1. **Consolidates state-of-the-art ML architectures**: Integrates widely recognized libraries such as PyOD (classical detection), SMP (spatial segmentation), TSAI (time series), and GPyTorch (probabilistic regression).
2. **Explainable AI (XAI)**: Enables the interpretability of the model's results through a post-hoc XAI module for transparency.
3. **Customization**: Allows users to implement custom models and loss functions.

------

# 2. System Workflow

AIDE provides a flexible and modular pipeline that tackles anomaly/extreme event detection (using binary/multiclass classification) and impact assessment (using regression) regardless of the nature of the data (hyperspectral, multispectral, microwave, or model runs).

### Data Loading and Preprocessing
Users provide temporal, spatial, or spatiotemporal datasets by defining classes that inherit from the PyTorch dataset class. Standard cleaning and transformations (e.g., normalization) are recommended.

### Model Training and Validation
The toolbox allows users to benchmark their algorithms against state-of-the-art models from integrated libraries. It includes TensorBoard compatibility for real-time insights during training, visualizing metrics, and streamlining hyperparameter tuning.

### Evaluation Metrics and Visualization
AIDE offers a wide range of evaluation metrics (MSE, correlation, accuracy, precision, recall, etc.) using packages like Scikit-Learn and TorchMetrics. Results can be visualized through distribution/scatter plots, spatial detection maps (with probabilities and decisions), and temporal detection signals.

### Characterization
To make probabilistic outputs more informative, AIDE includes a post-processing characterization stage:
1. **Thresholding**: Highlights the locations of a specific entity.
2. **Clustering and morphological processing**: Groups locations into regions based on morphological criteria.
3. **Analytics**: Characterizes impacted regions by extent, centroids, or probability descriptors.

### Explainable AI (XAI)
The XAI module relies on Python's Captum library to analyze the relevance of inputs for specific predictions using feature attribution methods (e.g., Integrated Gradients, SHAP). This allows for intermodel comparison, finding dependencies, and identifying inconsistent results across 1D, 2D, and 3D data types.

------

# 3. AIDE in Practice: Drought Monitoring Use Case

To demonstrate its flexibility, the AIDE toolbox was applied to a drought detection task in Russia using hydro-meteorological variables: air temperature 2m (T2M), surface soil moisture (SM), and evaporation (E).

### Model Evaluation and Intercomparison
The study evaluated models across multiple dimensions (pointwise, spatial, temporal, and spatiotemporal). Models incorporating temporal information consistently outperformed purely pointwise or spatial methods. 

**Quantitative Results (Top Performers by Category)**

| Data Type | Library | Algorithm | AUROC | F1 Score | Avg. PR |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Pointwise | PYOD | KPCA | 0.75 | 0.24 | 0.088 |
| Spatial | SMP | Link-Net | 0.78 | 0.277 | 0.216 |
| Temporal | TSAI | BILSTM | 0.887 | 0.27 | 0.362 |
| **Spatiotemporal** | **UD** | **3D CNN** | **0.93** | **0.392** | **0.38** |

*Table data sourced from.*

The **3D CNN** achieved the highest performance, emphasizing the importance of combining spatial and temporal information for accurate detection. Furthermore, using the XAI module (Integrated Gradients), the study identified that Temperature (T2M), followed by Soil Moisture (SM), were the most relevant features for the drought class.

------

# 4. Summary

The AIDE toolbox is a novel benchmarking suite and a user-friendly, modular pipeline tailored for monitoring anomalies and extreme events. By supporting diverse data dimensions, offering extensive evaluation/visualization tools, and integrating XAI, AIDE facilitates a deeper understanding and efficient monitoring of extreme events in remote sensing and geosciences.

***
