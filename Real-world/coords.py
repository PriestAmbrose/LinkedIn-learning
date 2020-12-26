import tkinter
def mouse_click(event):
    coords =root.winfo_pointerxy()
    print(coords)

root =tkinter.Tk()
root.bind('<Button>', mouse_click)
root.mainloop()