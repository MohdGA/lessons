colors = input('Enter "green", "yellow", "red": ').lower()
print(f'The user entered {colors}')

# if color == "green":
#     print('Go!')
# elif color == "yellow":
#     print('Slow Down!')
# elif color == "red":
#     print('Stop!')
# else:
#     print('Bogus!')

for color in colors:
    if color == "green":
        print('GO!')
    elif color == "yello":
        print('Slow Down!')
    elif color == "red":
        print('Stop!')
    else:
        print('Bongus!')



# things = ["computer", "g-g-ghost", "chair", "spider", "desk"]

# for thing in things:
#     if thing == "g-g-ghost":
#         print("Oh, that's just my ghost friend, carry on.")
#         continue
#     elif thing == "spider":
#         print("Nope. Burn it down, no more.")
#         break
#     print(f"There is a {thing} in the room.")