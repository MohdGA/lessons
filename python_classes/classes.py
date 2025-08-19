import random

# class Cat():
#     def __init__(self, name):
#         self.name = name
#         self.age = 3
        
#     def speak(self):
#         print(f"{self.name} - {self.age}")
        
#     def younger(self):
#         self.age -= 1
        
# ruby = Cat('yummi')
# ruby.younger()
# ruby.speak()




# class Student():
#     def __init__(self, name, age, gpa, gender, enrolled):
#         self.name = name
#         self.age = age
#         self.gpa = gpa
#         self.gender = gender
#         self.enrolled = enrolled
        
    
#     def type(self):
#         print(f'{self.name} is a {self.age} years old, with a {self.gpa} gpa, {self.name} is a {self.gender}, {"enrolled" if self.enrolled == True else "not enrolled"}')
    
   
    
# user = Student('Ahmed', 22, 3.0, 'male', True)
# user.type()


# class Vehicle():
#     def __init__(self, make, model):
#         self.make = make
#         self.model = model
#         self.running = False
        
#     def start(self):
#         self.running = True
#         print('Starting Up!')
    
#     def stop(self):
#         self.running = False
#         print("Turning Off.")
    
#     def __str__(self):
#         return f"The vehicle is a {self.make} {self.model}."

# car = Vehicle("Toyota", "RAV4")

# print(car)
# # prints: The vehicle is a Toyota RAV4.

# print(car.running) 
# # prints: False

# car.start()
# # prints: Starting up!

# print(car.running) 
# # prints: True

# car.stop()
# # prints: Turning Off.

# print(car.running)
# # prints: False


class BankAccount():
    def __init__(self, owner, balance = 400, has_overdraft = False):
        self.owner = owner
        self.balance = balance
        self.account_no = random.randint(11111,99999)
        self.has_overdraft = has_overdraft
        self.nabila ='something'
    
    def deposit(self, amount):
       self.balance += amount
       print(f"{self.owner} New balance after deposit: {self.balance}")
       
    
    def withdraw(self, amount):
        if self.has_overdraft == False and amount > self.balance:
            print('Inefficient balance')
        else:
            self.balance -= amount
            print(f"{self.owner} New balance: {self.balance}")
    
    
user = BankAccount('Mohd', 30)
user2 = BankAccount('Ahmed', 400)

print("Mohd account_number:", user.account_no)
user.deposit(150)
user.withdraw(200)

print("Ahmed account_number:", user.account_no)
user2.deposit(100)
user2.withdraw(40)

class SavingAccount(BankAccount):        
    def withdraw(self):
        print("No withdrawals permitted")
        
account = SavingAccount('Isa')
account.withdraw()
print(account.balance)



