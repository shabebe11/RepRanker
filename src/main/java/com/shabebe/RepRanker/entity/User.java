package com.shabebe.RepRanker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_db")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private int weight;
  private String sex;
  private int bench;
  private int squat;
  private int deadlift;
  private String benchRank;
  private String squatRank;
  private String deadliftRank;

  public User() {}

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getWeight() {
    return weight;
  }

  public void setWeight(int weightRange) {
    this.weight = weightRange;
  }

  public String getSex() {
    return sex;
  }

  public void setSex(String sex) {
    this.sex = sex;
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

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getBenchRank() {
    return benchRank;
  }

  public void setBenchRank(String benchRank) {
    this.benchRank = benchRank;
  }

  public String getSquatRank() {
    return squatRank;
  }

  public void setSquatRank(String squatRank) {
    this.squatRank = squatRank;
  }

  public String getDeadliftRank() {
    return deadliftRank;
  }

  public void setDeadliftRank(String deadliftRank) {
    this.deadliftRank = deadliftRank;
  }
}
