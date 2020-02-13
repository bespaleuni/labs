package by.gsu.pms;

public class Employee
{
    static double rate = 25000;
    String account;
    double transport;
    int days;

    public Employee(String account, double transport, int days)
    {
        this.account = account;
        this.transport = transport;
        this.days = days;
    }

    public Employee() {
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public double getTransport() {
        return transport;
    }

    public void setTransport(double transport) {
        this.transport = transport;
    }

    public int getDays() {
        return days;
    }

    public void setDays(int days) {
        this.days = days;
    }

    public double getTotal () {
        double total = 0;
        if (days > 1)
            total = rate * days + transport;
        else if (days == 1)
            total = transport;
        else
            System.out.println("Error. Wrong data");
        return total;
    }

    public void show () {
        System.out.println("rate = " + rate);
        System.out.println("account = " + account);
        System.out.println("transport = " + transport);
        System.out.println("days = " + days);
        System.out.println("total = " + getTotal());
        System.out.println();
    }

    @Override
    public String toString() {
        return  rate + ';' + account + ';' + transport + ';' + days + ';' + getTotal() + ';';
    }
}
