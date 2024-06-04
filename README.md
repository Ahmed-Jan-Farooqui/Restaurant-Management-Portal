# Restaurant Management Portal

I decided to build a Restaurant management portal as a practice project for a few different frameworks. I chose this because I believe it includes a lot of fundamental use-cases that are ubiquitous in web development.

## Features

Below, I'll describe the features I am going to include in this portal.

### Authentication

Optional authentication. User types are Guest, Customer, Employee, and Admin. Employee authentication is necessary, and Admin user type has special privileges (ability to add Employees to the database).

### Orders

Ability to place orders, view your order history, re-order previous orders, see order status.

### Menu

Employees can update the Menu and label items out-of-stock.

## Database Schema

### User

Contains:

<ul>
    <li>username: str</li>
    <li>email: str</li>
    <li>password: str</li>
    <li>isEmployee: bool</li>
    <li>isAdmin: bool</li>
</ul>

### Order

Contains:

<ul>
    <li>items: arr[OrderItem]</li>
    <li>total: float</li>
</ul>

### OrderItem

Contains:

<ul>
    <li>name: str</li>
    <li>price: float</li>
    <li>description: str</li>
</ul>
