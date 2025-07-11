package com.shabebe.RepRanker.entity;

public class User {
  private String name;
  private int age;
  private int weight;
  private String sex;

  public User(String name, int age, int weight, String sex) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.sex = sex;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getWeight() {
    return weight;
  }

  public void setWeight(int weight) {
    this.weight = weight;
  }

  public String getSex() {
    return sex;
  }

  public void setSex(String sex) {
    this.sex = sex;
  }
}
