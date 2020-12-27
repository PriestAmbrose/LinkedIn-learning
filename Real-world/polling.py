import time
import tkinter

hungry = False
while(hungry):
    time.sleep(1)
    print("awaik")

def alarm():
    print("alalmr")

def door():
    print("door")

def phone():
    print("phone")


root =tkinter.Tk()
tkinter.Button(root, text="Ring", command = door).pack()
tkinter.Button(root, text="Call phone", command=phone).pack()

root.after(4000,print("alarm"))

root.mainloop()