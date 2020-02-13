package com.company;

import by.gsu.pms.Employee;

public class Runner {

    public static void main(String[] args) {
        Employee[] trips = new Employee[7];
        trips[0] = new Employee("Anton Slutsky", 50000, 5);
        trips[1] = new Employee("Anton Slutsky", 50000, 2);
        trips[3] = new Employee("Anton Slutsky", 50000, 6);
        trips[4] = new Employee("Anton Slutsky", 50000, 12);
        trips[5] = new Employee("Anton Slutsky", 50000, 4);
        trips[6] = new Employee(null, 0, 0);
        for (Employee item: trips
             ) {
            if (item != null) {
                item.show();
            }
        }
    }

}
