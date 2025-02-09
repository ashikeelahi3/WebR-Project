library(tidyverse)
library(mvtnorm)

k <- 3
n <- 100
sigma.2 <- 1
nOutliar <- 10


set.seed(123)

mean <- runif(k, 2, 10)
sd <- runif(k, 1, 3)

X <- rmvtnorm(n, mean = mean, sigma = sd)
print(X)