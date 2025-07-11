package com.shabebe.RepRanker.entity;

import jakarta.persistence.Column;
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

  @Column(name = "name")
  private String name;

  private int weight;
  private String sex;
  private float bench;
  private float squat;
  private float deadlift;
  private float total;

  public User() {}

  public User(String name, int weight, String sex) {
    this.name = name;
    this.weight = weight;
    this.sex = sex;
    this.bench = 0;
    this.squat = 0;
    this.deadlift = 0;
    this.total = 0;
  }

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

  public float getBench() {
    return bench;
  }

  public void setBench(float bench) {
    this.bench = bench;
  }

  public float getSquat() {
    return squat;
  }

  public void setSquat(float squat) {
    this.squat = squat;
  }

  public float getDeadlift() {
    return deadlift;
  }

  public void setDeadlift(float deadlift) {
    this.deadlift = deadlift;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public float getTotal() {
    return total;
  }

  public void setTotal(float total) {
    this.total = total;
  }
}
