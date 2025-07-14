package com.shabebe.RepRanker.util;

import java.util.HashMap;
import java.util.Map;

public class LiftStandardsManager {

  public static class WeightStandards {
    private int bronze;
    private int silver;
    private int gold;
    private int platinum;
    private int diamond;

    public WeightStandards(int bronze, int silver, int gold, int platinum, int diamond) {
      this.bronze = bronze;
      this.silver = silver;
      this.gold = gold;
      this.platinum = platinum;
      this.diamond = diamond;
    }

    public String classify(int liftValue) {
      if (liftValue >= diamond) return "diamond";
      if (liftValue >= platinum) return "platinum";
      if (liftValue >= gold) return "gold";
      if (liftValue >= silver) return "silver";
      if (liftValue >= bronze) return "bronze";
      return "untrained";
    }

    // Getters
    public int getBronze() {
      return bronze;
    }

    public int getSilver() {
      return silver;
    }

    public int getGold() {
      return gold;
    }

    public int getPlatinum() {
      return platinum;
    }

    public int getDiamond() {
      return diamond;
    }
  }

  // Maps: Gender -> Lift -> Weight -> Standards
  private static final Map<String, Map<String, Map<Integer, WeightStandards>>> ALL_STANDARDS =
      new HashMap<>();

  static {
    initializeStandards();
  }

  private static void initializeStandards() {
    // Male standards
    Map<String, Map<Integer, WeightStandards>> maleStandards = new HashMap<>();

    // Male Bench Press
    Map<Integer, WeightStandards> maleBench = new HashMap<>();
    maleBench.put(50, new WeightStandards(24, 38, 57, 79, 103));
    maleBench.put(55, new WeightStandards(29, 45, 64, 87, 113));
    maleBench.put(60, new WeightStandards(34, 51, 72, 96, 123));
    maleBench.put(65, new WeightStandards(39, 57, 79, 104, 132));
    maleBench.put(70, new WeightStandards(44, 62, 85, 112, 141));
    maleBench.put(75, new WeightStandards(49, 68, 92, 119, 149));
    maleBench.put(80, new WeightStandards(53, 74, 98, 127, 157));
    maleBench.put(85, new WeightStandards(58, 79, 105, 134, 165));
    maleBench.put(90, new WeightStandards(62, 84, 111, 141, 172));
    maleBench.put(95, new WeightStandards(67, 89, 116, 147, 180));
    maleBench.put(100, new WeightStandards(71, 94, 122, 153, 187));
    maleBench.put(105, new WeightStandards(75, 99, 128, 160, 194));
    maleBench.put(110, new WeightStandards(80, 104, 133, 166, 200));
    maleBench.put(115, new WeightStandards(84, 109, 138, 172, 207));
    maleBench.put(120, new WeightStandards(88, 113, 143, 177, 213));
    maleBench.put(125, new WeightStandards(92, 118, 148, 183, 219));
    maleBench.put(130, new WeightStandards(95, 122, 153, 188, 225));
    maleBench.put(135, new WeightStandards(99, 126, 158, 194, 231));
    maleBench.put(140, new WeightStandards(103, 130, 163, 199, 236));

    // Male Squat
    Map<Integer, WeightStandards> maleSquat = new HashMap<>();
    maleSquat.put(50, new WeightStandards(33, 52, 76, 104, 136));
    maleSquat.put(55, new WeightStandards(40, 60, 86, 116, 149));
    maleSquat.put(60, new WeightStandards(47, 68, 95, 127, 161));
    maleSquat.put(65, new WeightStandards(53, 76, 104, 137, 173));
    maleSquat.put(70, new WeightStandards(59, 83, 113, 147, 184));
    maleSquat.put(75, new WeightStandards(66, 91, 122, 157, 195));
    maleSquat.put(80, new WeightStandards(72, 98, 130, 166, 205));
    maleSquat.put(85, new WeightStandards(78, 105, 138, 175, 215));
    maleSquat.put(90, new WeightStandards(83, 112, 146, 184, 225));
    maleSquat.put(95, new WeightStandards(89, 118, 153, 192, 234));
    maleSquat.put(100, new WeightStandards(95, 125, 160, 201, 243));
    maleSquat.put(105, new WeightStandards(100, 131, 168, 209, 252));
    maleSquat.put(110, new WeightStandards(106, 137, 174, 216, 260));
    maleSquat.put(115, new WeightStandards(111, 143, 181, 224, 269));
    maleSquat.put(120, new WeightStandards(116, 149, 188, 231, 277));
    maleSquat.put(125, new WeightStandards(121, 155, 194, 238, 284));
    maleSquat.put(130, new WeightStandards(126, 160, 201, 245, 292));
    maleSquat.put(135, new WeightStandards(131, 166, 207, 252, 299));
    maleSquat.put(140, new WeightStandards(136, 171, 213, 259, 307));

    // Male Deadlift
    Map<Integer, WeightStandards> maleDeadlift = new HashMap<>();
    maleDeadlift.put(50, new WeightStandards(44, 65, 93, 125, 160));
    maleDeadlift.put(55, new WeightStandards(51, 74, 103, 137, 174));
    maleDeadlift.put(60, new WeightStandards(58, 83, 114, 149, 187));
    maleDeadlift.put(65, new WeightStandards(66, 92, 124, 160, 200));
    maleDeadlift.put(70, new WeightStandards(73, 100, 133, 171, 212));
    maleDeadlift.put(75, new WeightStandards(79, 108, 142, 182, 224));
    maleDeadlift.put(80, new WeightStandards(86, 116, 151, 192, 235));
    maleDeadlift.put(85, new WeightStandards(93, 123, 160, 201, 245));
    maleDeadlift.put(90, new WeightStandards(99, 131, 168, 211, 256));
    maleDeadlift.put(95, new WeightStandards(105, 138, 176, 220, 266));
    maleDeadlift.put(100, new WeightStandards(111, 145, 184, 228, 275));
    maleDeadlift.put(105, new WeightStandards(117, 151, 192, 237, 284));
    maleDeadlift.put(110, new WeightStandards(123, 158, 199, 245, 293));
    maleDeadlift.put(115, new WeightStandards(129, 164, 206, 253, 302));
    maleDeadlift.put(120, new WeightStandards(134, 171, 213, 261, 311));
    maleDeadlift.put(125, new WeightStandards(140, 177, 220, 268, 319));
    maleDeadlift.put(130, new WeightStandards(145, 183, 227, 276, 327));
    maleDeadlift.put(135, new WeightStandards(150, 188, 233, 283, 335));
    maleDeadlift.put(140, new WeightStandards(155, 194, 240, 290, 342));

    maleStandards.put("bench", maleBench);
    maleStandards.put("squat", maleSquat);
    maleStandards.put("deadlift", maleDeadlift);

    ALL_STANDARDS.put("male", maleStandards);

    // Female standards
    Map<String, Map<Integer, WeightStandards>> femaleStandards = new HashMap<>();

    Map<Integer, WeightStandards> femaleBench = new HashMap<>();
    femaleBench.put(40, new WeightStandards(8, 18, 32, 50, 70));
    femaleBench.put(45, new WeightStandards(10, 21, 36, 55, 76));
    femaleBench.put(50, new WeightStandards(12, 24, 40, 59, 82));
    femaleBench.put(55, new WeightStandards(15, 27, 43, 64, 87));
    femaleBench.put(60, new WeightStandards(17, 29, 47, 68, 92));
    femaleBench.put(65, new WeightStandards(19, 32, 50, 72, 96));
    femaleBench.put(70, new WeightStandards(20, 34, 53, 75, 101));
    femaleBench.put(75, new WeightStandards(22, 37, 56, 79, 105));
    femaleBench.put(80, new WeightStandards(24, 39, 59, 82, 109));
    femaleBench.put(85, new WeightStandards(26, 41, 62, 86, 112));
    femaleBench.put(90, new WeightStandards(28, 44, 64, 89, 116));
    femaleBench.put(95, new WeightStandards(29, 46, 67, 92, 119));
    femaleBench.put(100, new WeightStandards(31, 48, 69, 95, 123));
    femaleBench.put(105, new WeightStandards(33, 50, 72, 98, 126));
    femaleBench.put(110, new WeightStandards(34, 52, 74, 100, 129));
    femaleBench.put(115, new WeightStandards(36, 54, 76, 103, 132));
    femaleBench.put(120, new WeightStandards(37, 56, 79, 106, 135));

    Map<Integer, WeightStandards> femaleSquat = new HashMap<>();
    femaleSquat.put(40, new WeightStandards(17, 31, 51, 75, 101));
    femaleSquat.put(45, new WeightStandards(20, 36, 56, 81, 109));
    femaleSquat.put(50, new WeightStandards(23, 39, 61, 87, 115));
    femaleSquat.put(55, new WeightStandards(26, 43, 65, 92, 122));
    femaleSquat.put(60, new WeightStandards(29, 47, 70, 97, 128));
    femaleSquat.put(65, new WeightStandards(32, 50, 74, 102, 133));
    femaleSquat.put(70, new WeightStandards(34, 53, 78, 106, 138));
    femaleSquat.put(75, new WeightStandards(37, 56, 81, 111, 143));
    femaleSquat.put(80, new WeightStandards(39, 59, 85, 115, 148));
    femaleSquat.put(85, new WeightStandards(41, 62, 88, 119, 152));
    femaleSquat.put(90, new WeightStandards(44, 65, 91, 123, 157));
    femaleSquat.put(95, new WeightStandards(46, 68, 95, 126, 161));
    femaleSquat.put(100, new WeightStandards(48, 70, 98, 130, 165));
    femaleSquat.put(105, new WeightStandards(50, 73, 101, 133, 169));
    femaleSquat.put(110, new WeightStandards(52, 75, 103, 136, 172));
    femaleSquat.put(115, new WeightStandards(54, 77, 106, 140, 176));
    femaleSquat.put(120, new WeightStandards(56, 80, 109, 143, 179));

    Map<Integer, WeightStandards> femaleDeadlift = new HashMap<>();
    femaleDeadlift.put(40, new WeightStandards(24, 40, 62, 89, 118));
    femaleDeadlift.put(45, new WeightStandards(27, 45, 68, 95, 126));
    femaleDeadlift.put(50, new WeightStandards(31, 49, 73, 102, 133));
    femaleDeadlift.put(55, new WeightStandards(34, 53, 78, 107, 140));
    femaleDeadlift.put(60, new WeightStandards(37, 57, 83, 113, 146));
    femaleDeadlift.put(65, new WeightStandards(40, 61, 87, 118, 152));
    femaleDeadlift.put(70, new WeightStandards(43, 64, 91, 123, 157));
    femaleDeadlift.put(75, new WeightStandards(45, 67, 95, 127, 163));
    femaleDeadlift.put(80, new WeightStandards(48, 71, 99, 132, 168));
    femaleDeadlift.put(85, new WeightStandards(51, 74, 102, 136, 172));
    femaleDeadlift.put(90, new WeightStandards(53, 77, 106, 140, 177));
    femaleDeadlift.put(95, new WeightStandards(55, 79, 109, 144, 181));
    femaleDeadlift.put(100, new WeightStandards(58, 82, 112, 147, 185));
    femaleDeadlift.put(105, new WeightStandards(60, 85, 116, 151, 189));
    femaleDeadlift.put(110, new WeightStandards(62, 87, 119, 154, 193));
    femaleDeadlift.put(115, new WeightStandards(64, 90, 121, 158, 197));
    femaleDeadlift.put(120, new WeightStandards(66, 92, 124, 161, 200));

    femaleStandards.put("bench", femaleBench);
    femaleStandards.put("squat", femaleSquat);
    femaleStandards.put("deadlift", femaleDeadlift);

    ALL_STANDARDS.put("female", femaleStandards);
  }

  public static String classifyLift(String gender, String lift, int weight, int liftValue) {
    try {
      WeightStandards standards =
          ALL_STANDARDS.get(gender.toLowerCase()).get(lift.toLowerCase()).get(weight);

      if (standards == null) {
        return "unknown";
      }

      return standards.classify(liftValue);

    } catch (Exception e) {
      return "error";
    }
  }
}
