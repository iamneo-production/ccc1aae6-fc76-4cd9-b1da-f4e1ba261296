package com.example.login.controller;

import com.example.login.loginDao.CarsDao;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins="*")
public class AdminHome {
    @GetMapping(value =
            "/dashboard",produces="application/json")
    public ArrayList<CarsDao> getDashBoard(HttpServletResponse response) {
        Connection con = null;
        ArrayList<CarsDao> cars = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/carrental", "root", "");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM cars");
            cars = new ArrayList<>();
            while (rs.next()) {
                CarsDao cars1 = new CarsDao(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));
                cars.add(cars1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return cars;
    }

}
