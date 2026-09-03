---
title:          "Bag-of-features-driven spectral-spatial siamese neural network for hyperspectral image classification"
date:           2022-01-01
selected:       true
pub:            "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing"
pub_date:       "2022"
abstract: >-
  Deep learning (DL) exhibits commendable performance in hyperspectral image (HSI) classification because of its powerful feature expression ability. Siamese neural network further improves the performance of DL models by learning similarities within-class and differences between-class from sample pairs. However, there are still some limitations in siamese neural network. On the one hand, siamese neural network usually needs a large number of negative pair samples in the training process, leading to computing overhead. On the other hand, current models may lack interpretability because of complex network structure. To overcome the above limitations, we propose a spectral-spatial siamese neural network with bag-of-features (S3BoF) for HSI classification. First, we use a siamese neural network with 3-D and 2-D convolutions to extract the spectral-spatial features. Second, we introduce stop-gradient operation and prediction head structure to make the siamese neural network work without negative pair samples, thus reducing the computational burden. Third, a bag-of-features (BoF) learning module is introduced to enhance the model interpretability and feature representation. Finally, a symmetric loss and a cross entropy loss are respectively used for contrastive learning and classification. Experiments results on four common hyperspectral datasets indicated that S3BoF performs better than the other traditional and state-of-the-art deep learning HSI classification methods in terms of classification accuracy and generalization performance, with improvements in terms of OA around 1.40%–30.01%, 0.27%–8.65%, 0.37%–6.27%, 0.22%–6.64% for Indian Pines, University of Pavia, Salinas, and Yellow River Delta datasets, respectively, under 5% labeled samples per class.
cover: /assets/images/covers/jstar_2022.jpg
authors:
- Zhaohui Xue
- Tianzhi Zhu
- Yiyang Zhou
- Mengxue Zhang
links:
  Paper: https://ieeexplore.ieee.org/abstract/document/10003978
---