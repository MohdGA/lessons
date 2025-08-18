# my_dict = {
#     "name": "mohd",
#     "age": 24
# }

# print(my_dict.get('hobby', 'Anime'))

# my_dict['hobby'] = 'video games'

# del my_dict['age']

# print(my_dict)

# print(len(my_dict))

# for key in my_dict:
#     print(key, my_dict[key])

colors = ['blue', 'yellow', 'black']

print(colors[-2])

colors.append('red')
colors.append(['orange', 'green']) # with list
colors.extend(['brown', 'white'])  # without list
print(colors)
colors.pop(4)
print(colors)
colors.remove('brown')
print(colors)

print(colors.index('white'))

b, y, b, r ,w = colors

print(b)

# for idx, color in enumerate(colors):
#     print(idx, color)

# for key, val in my_dict.items():
#     print( f"{key} is {val}" )