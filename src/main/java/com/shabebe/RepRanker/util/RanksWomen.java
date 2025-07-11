package com.shabebe.RepRanker.util;

import java.util.HashMap;
import java.util.Map;

public class RanksWomen {
  private final Map<Integer, int[]> benchStandards = new HashMap<>();
  private final Map<Integer, int[]> squatStandards = new HashMap<>();
  private final Map<Integer, int[]> deadliftStandards = new HashMap<>();

  public String classifyLift(String liftType, int bodyWeight, int lift) {
    Map<Integer, int[]> standards =
        switch (liftType.toLowerCase()) {
          case "bench" -> benchStandards;
          case "squat" -> squatStandards;
          case "deadlift" -> deadliftStandards;
          default -> throw new IllegalArgumentException("Invalid lift type");
        };

    int[] thresholds = standards.get(bodyWeight);
    String[] levels = {"Bronze", "Silver", "Gold", "Platnium", "Diamond"};

    for (int i = 0; i < thresholds.length; i++) {
      if (lift < thresholds[i]) {
        return levels[i];
      }
    }
    return "Diamond";
  }
}
