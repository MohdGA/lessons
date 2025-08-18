# nums = [1, 3, 2, 6, 5]
# odds = list(filter(lambda num: num % 2, nums))

# def sum(*args):
#     print(type(args))
#     # prints: <class 'tuple'>

#     total = 0
#     for arg in args:
#         total += arg

#     return total

# print(sum(1, 5, 10))
# # prints: 16

def make_employee(role, **kwargs):
    username = ""
    for name in kwargs.values():
        username += name

    employee = {"role": role, "username": username}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))