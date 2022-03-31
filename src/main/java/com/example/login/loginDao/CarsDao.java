package com.example.login.loginDao;

import java.io.Serializable;

public class CarsDao implements Serializable {
    private int id;
    private String owner_name;
    private String email;
    private String car_number;
    private String price;
    private String brand;
    private String make;
    private String phone;
    private String address;

    public CarsDao(int id, String owner_name, String email, String car_number, String price, String brand, String make, String phone, String address) {
        this.id = id;
        this.owner_name = owner_name;
        this.email = email;
        this.car_number = car_number;
        this.price = price;
        this.brand = brand;
        this.make = make;
        this.phone = phone;
        this.address = address;
    }

    public CarsDao() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOwner_name() {
        return owner_name;
    }

    public void setOwner_name(String owner_name) {
        this.owner_name = owner_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCar_number() {
        return car_number;
    }

    public void setCar_number(String car_number) {
        this.car_number = car_number;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
