import eel

eel.init('web')

@eel.expose
def sayHello():
    return 'It is working!!!'

eel.start('index.html')

