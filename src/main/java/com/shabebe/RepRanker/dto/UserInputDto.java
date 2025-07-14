package com.shabebe.RepRanker.dto;

public class UserInputDto {
  private String nickname;
  private String sex;
  private int weight;
  private int bench;
  private int squat;
  private int deadlift;

  public String getNickname() {
    return nickname;
  }

  public void setNickname(String name) {
    this.nickname = name;
  }

  public String getSex() {
    return sex;
  }

  public void setSex(String sex) {
    this.sex = sex;
  }

  public Integer getWeight() {
    return weight;
  }

  public void setBodyweight(String bodyweight) {
    this.weight = parseStringToInteger(bodyweight);
  }

  public Integer getBench() {
    return bench;
  }

  public void setBench(String bench) {
    this.bench = parseStringToInteger(bench);
  }

  public Integer getSquat() {
    return squat;
  }

  public void setSquat(String squat) {
    this.squat = parseStringToInteger(squat);
  }

  public Integer getDeadlift() {
    return deadlift;
  }

  public void setDeadlift(String deadlift) {
    this.deadlift = parseStringToInteger(deadlift);
  }

  private Integer parseStringToInteger(String value) {
    if (value == null || value.trim().isEmpty()) {
      return 0;
    }
    try {
      return Integer.parseInt(value.trim());
    } catch (NumberFormatException e) {
      return 0;
    }
  }
}
