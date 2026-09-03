---
title:          "DSR-GCN: Differentiated-scale restricted graph convolutional network for few-shot hyperspectral image classification"
date:           2023-01-01
selected:       true
pub:            "IEEE Transactions on Geoscience and Remote Sensing"
pub_date:       "2023"
abstract: >-
  Graph convolutional networks (GCNs) have shown great potential for few-shot hyperspectral image (HSI) classification. Mainstream GCNs construct graphs according to single-scale segmentation, which usually ignores subtle adjacency relations between small regions, leading to an unreliable initial local graph. To overcome the above issue, we propose a differentiated-scale restricted GCN (DSR-GCN) for HSI classification. First, we propose a differentiated-scale graph construction method considering both the subtle and relative wider range spectral–spatial relation. Second, restricted fusion loss is designed to restrict the fusion of features extracted with differentiated-scale GCN branches. Finally, we design a lightweight spectral-spatial siamese network (S3Net) to remedy local pixel-level features. The proposed DSR-GCN can better model spatial structure with a reliable and refined graph, and it can capture more discriminate features in few-shot learning (FSL) scenarios. Extensive experiments conducted on four benchmark datasets demonstrate that DSR-GCN outperforms the other deep learning methods in terms of classification accuracy and generalization performance, with improvements in terms of overall accuracy (OA) around 6.20% ∼ 23.41% (Indian Pines), 4.45% ∼ 16.48% (University of Pavia), 4.25% ∼ 11.85% (Salinas), and 2.0% ∼ 17.23% (University of Houston) under five labeled samples per class.
cover: /assets/images/covers/tgrs_2023.jpg
authors:
- Xue, Zhaohui
- Zhiwei Liu
- Mengxue Zhang
links:
  Paper: https://ieeexplore.ieee.org/abstract/document/10061285
---
