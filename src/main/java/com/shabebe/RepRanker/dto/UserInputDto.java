package com.shabebe.RepRanker.dto;

public class UserInputDto {
  private String name;
  private String sex;
  private int bodyweight;
  private int bench;
  private int squat;
  private int deadlift;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSex() {
    return sex;
  }

  public void setSex(String sex) {
    this.sex = sex;
  }

  public int getBodyweight() {
    return bodyweight;
  }

  public void setBodyweight(int bodyweight) {
    this.bodyweight = bodyweight;
  }

  public int getBench() {
    return bench;
  }

  public void setBench(int bench) {
    this.bench = bench;
  }

  public int getSquat() {
    return squat;
  }

  public void setSquat(int squat) {
    this.squat = squat;
  }

  public int getDeadlift() {
    return deadlift;
  }

  public void setDeadlift(int deadlift) {
    this.deadlift = deadlift;
  }
}
