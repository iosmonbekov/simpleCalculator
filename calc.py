print('Please Enter: ')
num1, operator, num2 = map(str, input().split())

try:
    answer = {
        '+': float(num1) + float(num2),
        '-': float(num1) - float(num2),
        '*': float(num1) * float(num2),
        '/': float(num1) / float(num2),
    }
except: 
    print("SomeThing get Wrong!!!")

for i in answer.keys():
    if (i == operator):
        print('Answer is: ', answer[i])
        break
else: 
    print("Error occured!!!")
        
