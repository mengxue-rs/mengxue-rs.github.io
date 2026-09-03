---
title:          "Attention-based second-order pooling network for hyperspectral image classificationAttention-based second-order pooling network for hyperspectral image classification"
date:           2021-01-01
selected:       true
pub:            "IEEE Transactions on Geoscience and Remote Sensing"
pub_date:       "2021"
abstract: >-
  Deep learning (DL) has exhibited huge potentials for hyperspectral image (HSI) classification due to its powerful nonlinear modeling and end-to-end optimization characteristics. Although the superior performance of DL-based methods has been witnessed, some limitations can still be found. On the one hand, existing DL frameworks usually resorted to first-order statistical features, whereas they rarely considered second-order or higher order statistical features. On the other hand, the optimization of complex hyperparameters (e.g., the layer number and convolutional kernel size) is time-consuming and a very tough task, making the designed DL framework unexplainable. To overcome these challenges, we propose a novel attention-based second-order pooling network (A-SPN). First, a first-order feature operator is designed to model the spectral–spatial information of HSI. Second, an attention-based second-order pooling (A-SOP) operator is designed to model discriminative and representative features. Finally, a fully connected layer with softmax loss is used for classification. The proposed framework can obtain second-order statistical features in an end-to-end manner. In addition, A-SPN is free of complex hyperparameters tuning, making it more explainable and easily equipped for classification tasks. Experimental results based on three common hyperspectral data sets demonstrate that A-SPN outperforms other traditional and state-of-the-art DL-based HSI classification methods in terms of generalization performance with limited training samples, classification accuracy, convergence rate, and computational complexity.
cover: /assets/images/covers/tgrs_2021.jpg
authors:
- Xue, Zhaohui
- Mengxue Zhang
- Yifeng Liu
- Peijun Du
links:
  Paper: https://ieeexplore.ieee.org/abstract/document/9325094
  Code: https://github.com/mengxue-rs/a-spn
---